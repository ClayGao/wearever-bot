import { Page, test, Locator } from "@playwright/test";
import { HIFIFNK } from "../site/site";
import { getTodayDate } from "../utils/getToday";
import axios from "axios";

/**
 * CONFIG START
 */
const PAGE_COUNT = 5;
const ALL_PRODUCT_HREF: string[] = [];

/**
 * CONFIG END
 */

let allPageUrlList: string[] = [];
for (let i = 1; i <= PAGE_COUNT; i++) {
  const url = `${HIFIFNK.NEW_ARRIVAL}&page=${i}`;
  allPageUrlList.push(url);
}

const getAllProductCards = async (page: Page, cardSelector: string) => {
  return await page.locator(cardSelector).all();
};

test.describe("t", () => {
  test.beforeAll(async ({ browser }) => {
    const page = await browser.newPage();
    for (const url of allPageUrlList) {
      await page.goto(`${url}`);
      const allProductCards = await getAllProductCards(
        page,
        "#grid2-2-4 > li .mun-prd-thumb > a"
      );
      for (const card of allProductCards) {
        const pLink = (await card.getAttribute("href")) as string;
        ALL_PRODUCT_HREF.push(`${HIFIFNK.HOME}${pLink}`);
      }
    }

    await page.close();
  });

  test("tt", async ({ page }) => {
    test.slow();
    console.log(ALL_PRODUCT_HREF.length);
    let count = 1;
    for (const url of ALL_PRODUCT_HREF) {
      await page.goto(url, { waitUntil: "networkidle" });
      await page.evaluate(() =>
        window.scrollTo({ behavior: "smooth", top: document.body.scrollHeight })
      );
      await page.waitForTimeout(3000);

      const data = await page.evaluate(() => {
        const P = "HIFIFNK";
        const url = window.location.href;
        const q = (s: string) => document.querySelector(s);
        const qAll = (s: string) => document.querySelectorAll(s);

        const name = q("#mun_information .mun-detail-desc span")!.textContent;
        const price = q("#span_product_price_text")!.textContent;
        const description = qAll("#mun_information .mun-detail-desc span")[2]
          .textContent;
        const detail = q("#mun_tap .mun-tap-desc")!.textContent;
        const color = Array.from(qAll('select[option_sort_no="1"] > option'))
          .filter((el) => el.getAttribute("value")?.indexOf("*") === -1)
          .map((el) => el.getAttribute("value"))
          .join("\n");
        const size = Array.from(qAll('select[option_sort_no="2"] > option'))
          .filter((el) => el.getAttribute("value")?.indexOf("*") === -1)
          .map((el) => el.getAttribute("value"))
          .join("\n");

        const imageEls = Array.from(qAll("#mun_productDetail > img")).map(
          //@ts-ignore
          (imgEl) => imgEl.src
        );
        const images = imageEls.join("\n");
        const [, productImage] = imageEls;

        return {
          P,
          url,
          name,
          price,
          description,
          detail,
          color,
          size: size || "OS (Free)",
          images,
          productImage,
        };
      });

      count++;

      await axios.post(
        "https://script.google.com/macros/s/AKfycbyVUZohwfLJJkkMtZlw5HrgJLtW49OBSQ5kk6_ohKkgzXYODKoaI63YQaLc4LUA40mKRQ/exec",
        data
      );
    }
  });
});
