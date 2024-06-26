import { Page } from "@playwright/test";

export const scrollToElement = async (page: Page, top: number) => {
  await page.evaluate(
    (top) =>
      window.scrollTo({
        behavior: "smooth",
        top: document.body.scrollHeight / top,
      }),
    top
  );
};

export const scrollToTheBottom = async (page: Page) => {
  await page.evaluate(() => {
    window.scrollTo({
      behavior: "smooth",
      top: document.body.scrollHeight,
    });
  });
};
