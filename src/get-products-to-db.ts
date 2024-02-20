import { getNewProducts } from "./get-products";
import { connectToDatabase } from "../utils/mongodb";
import { compareArrAndReturnNew } from "../utils/compare";

Promise.resolve(getNewProducts())
  .then(async (result) => {
    // result 本身就是快照
    try {
      const { db } = await connectToDatabase();
      const temp = (await db.collection("temp").find({}).toArray()) || [];
      const activeStore =
        (await db.collection("store").find({}).toArray()) || [];
      if (temp.length <= 0 && activeStore.length <= 0) {
        // 如果 temp 原本就空的，那就不用比對，把這次的資料作為 init 存為 temp
        await db.collection("temp").drop();
        await db.collection("temp").insertMany(result);
        return;
      }
      // 1. 比對和上一次的暫存是新商品
      // @ts-ignore TODO: fix type error
      const productToCompareWithTemp = compareArrAndReturnNew(temp, result);
      // 2. 就算是新商品，也要看 store 是否出現過
      const newProducts = compareArrAndReturnNew(
        // @ts-ignore TODO: fix type error
        activeStore,
        productToCompareWithTemp
      );
      if (newProducts.length <= 0) {
        // 刪除原本的 temp，目的是作為清空來用
        await db.collection("temp").drop();
        // 把這次收集到的新品資料，放到新的 temp
        await db.collection("temp").insertMany(result);
        return;
      }
      const newProductsWithState = newProducts.map((product) => {
        return {
          ...product,
          isAlreadyInSheet: false,
        };
      });
      // 把比對後的新商品，加到 store 之中
      const dbStoreRes = await db
        .collection("store")
        .insertMany(newProductsWithState);
      // 刪除原本的 temp，目的是作為清空來用
      const dbTempDropRes = await db.collection("temp").drop();
      // 把這次收集到的新品資料，放到新的 temp，這就是當天的快照
      const dbResponse = await db.collection("temp").insertMany(result);
    } catch (err) {
      console.log(err);
    }
  })
  .then(() => {
    process.exit();
  });
