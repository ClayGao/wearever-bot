import { init } from "./init";
import { getTodayDate } from "../utils/getToday";
import { exportArrayToJsonFile } from "../utils/file";

const VASIKA_ALL_PRODUCTS =
  "https://smartstore.naver.com/vasika/category/50000000?st=POPULAR&dt=BIG_IMAGE&page=1&size=80";
const PRODUCT_CARDS = [];

export function fetchProductCards() {
  return Promise.resolve()
    .then(init)
    .then(async ({ page, browser }) => {
      await page.goto(VASIKA_ALL_PRODUCTS);
      const pagesCount = await page.locator(".UWN4IvaQza").count();
      console.log("偵測到總頁數", pagesCount);

      for (let i = 1; i <= pagesCount; i += 1) {
        await page.waitForSelector(".FR2H3hWxUo li");
        const productCards = await page.locator(".FR2H3hWxUo li").all();

        for (const productCard of await productCards) {
          const aTag = await productCard.locator("a").first();
          const imageEl = await aTag.locator("img").first();
          const link = `https://smartstore.naver.com/${await aTag.getAttribute("href")}`;
          const previewImg = await imageEl.getAttribute("src");
          const brand = "vasika";
          const priceEl = await productCard.locator("strong:first-child");
          const price = await priceEl.innerText();
          const nameEl = await productCard.locator("._26YxgX-Nu5");
          const name = await nameEl.innerText();
          const createdAt = getTodayDate();

          const tempData = {
            link,
            previewImg,
            brand,
            name,
            price,
            createdAt,
          };

          PRODUCT_CARDS.push(tempData);
        }

        if (i < pagesCount) {
          await page.click(`.UWN4IvaQza[data-shp-contents-id='${i + 1}']`);
          await page.waitForLoadState();
          await page.waitForTimeout(6000);
        }
      }

      browser.close();
      console.log("長度", PRODUCT_CARDS.length);
      return PRODUCT_CARDS;
    });
}

// 使用 fetchProductCards 函數
// fetchProductCards()
//   .then((productCards) => {
//     
//     return productCards;
//   })
//   //.then((productCards) => exportArrayToJsonFile(productCards, `product-${getTodayDate()}.json`)) // get json
//   // .then((productCards) => exportArrayToJsonFile(productCards, `product-${getTodayDate()}.json`))
//   .catch((err) => console.error(err));
