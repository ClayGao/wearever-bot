import { chromium } from "@playwright/test";
import { PLAYWRIGHT_CONFIG } from "../wearever.config";

export const init = async () => {
  const browser = await chromium.launch({
    ...PLAYWRIGHT_CONFIG,
  });
  const page = await browser.newPage();
  return { page, browser };
};

