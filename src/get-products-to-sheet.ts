// import ProductList from "@/product-2024-02-11-to-2024-02-03-women.json";
// import * as ProductList from "../laroom.json";
// import * as ProductList from "../veryu.json";
import { chromium } from "@playwright/test";
import { PLAYWRIGHT_CONFIG, SITE_CONFIG } from "../wearever.config";

import axios from "axios";
import type { ProductData } from "../src/type";

const SHEET_API_ENDPOINT = process.env.SHEET_API_ENDPOINT;

export const postToStagingSheet = async (data: ProductData) => {
  try {
    await axios.post(SHEET_API_ENDPOINT, data);
  } catch (error) {
    console.error(error);
  }
};

const ProductList: any[] = [];

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
      try {
        const pdpData = await site.pdpHandler(page, link);
        await postToStagingSheet(pdpData);
      } catch {
        const pdpData = {
          name: "error",
          url: link,
          price: "",
          description: "",
          color: "",
          size: "",
          images: "",
          productImage: "",
        };
        await postToStagingSheet(pdpData);
        continue;
      }
    }
  }
};
