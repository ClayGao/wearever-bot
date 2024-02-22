import { getNewProducts } from "./get-products";
import { connectToDatabase } from "../utils/mongodb";
import { exportArrayToJsonFile } from "../utils/file";
import { uniqueItems, formatterSrcWithHttps } from "../utils/formatter";
import { getTodayDate } from "../utils/getToday";

Promise.resolve(getNewProducts())
  .then(async (result) => {
    await exportArrayToJsonFile(result, `product-${getTodayDate()}.json`);
  })
  .then(() => {
    process.exit();
  });
