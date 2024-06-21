import ProductList from "../women.json";
// import * as ProductList from "../cart-women.json";
// import * as ProductList from "../veryu.json";
import { chromium } from "@playwright/test";
import { PLAYWRIGHT_CONFIG, SITE_CONFIG } from "../wearever.config";
import "dotenv/config";

import axios from "axios";
import type { ProductData } from "../src/type";

// 一個不錯的轉 json 網站，可以去除 json 斜線\ 與格式化
// https://www.toolscat.com/

const SHEET_API_ENDPOINT = process.env.SHEET_API_ENDPOINT;

export const postToStagingSheet = async (data: ProductData) => {
  try {
    await axios.post(SHEET_API_ENDPOINT, data);
  } catch (error) {
    console.error(error);
  }
};

const init = async () => {
  const browser = await chromium.launch({
    headless: PLAYWRIGHT_CONFIG.headless,
  });
  const page = await browser.newPage();
  return { page, browser };
};

export const productJsonToSheet = async () => {
  const { page } = await init();
  for (const { link, previewImg } of ProductList) {
    const site = SITE_CONFIG.find((site) => link.includes(site.domain));
    if (site) {
      const pdpData = await site.pdpHandler(page, link);
      // console.log({ pdpData });
      await postToStagingSheet({
        ...pdpData,
        productImage: previewImg,
      });
    }
  }
};

Promise.resolve(productJsonToSheet()).then(() => process.exit());
