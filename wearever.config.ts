import { scrollToTheBottom } from "./utils/scroll";
import {
  autumnPdpHandler,
  mstuPdpHandler,
  hifiPdpHandler,
  newCheapChicPdpHandler,
  laRoomPdpHandler,
  veryYouPdpHandler,
  room203PdpHandler,
  m123undeuxtroisHandler,
  diplitiHandler,
  chieleiHandler,
  clostudioHandler,
  raptureHandler,
  tuziroomHandler,
  hoiboHandler,
  smartstoreHandler,
  yourclothesHandler,
  vagueHandler,
  threeThreeHoodieHandler
} from "./site/sitePdpHandler";

export const PLAYWRIGHT_CONFIG = {
  headless: true, // 無頭模式
};

type SiteConfig = {
  enable: boolean;
  name: string;
  dbName?: string;
  cartProductNameSelector?: string;
  domain: string;
  pages: string[];
  pagePagination: number;
  cardSelector: string;
  cardLinkSelector?: string;
  pageQueryString?: string;
  previewImgSelector?: string;
  pdpHandler: Function; // Replace Function with a more specific type if possible
  callback?: Function;
};

/**
 * SITE_CONFIG
 * enable: enable or not
 * name: name of site
 * domain: url of site
 * pages: pages of site
 * pagePagination: number limit of pages
 * cardSelector: selector of card
 * pdpHandler: handler of pdp
 */
export const SITE_CONFIG: SiteConfig[] = [
  // {
  //   enable: false,
  //   name: "HIFIFNK",
  //   domain: "https://hififnk.kr",
  //   pages: [
  //     "https://hififnk.kr/product/list.html?cate_no=170", // new arrival
  //     "https://hififnk.kr/category/outerwears/171/", // outer
  //     "https://hififnk.kr/category/tops/173/", // top
  //     "https://hififnk.kr/category/shirts/174/", // shirts
  //     "https://hififnk.kr/category/pants/175/", // pants
  //   ],
  //   pagePagination: 2,
  //   cardSelector: "#grid2-2-4 > li",
  //   cartProductNameSelector: ".name",
  //   pdpHandler: hifiPdpHandler,
  // },
  {
    enable: true,
    name: "AUTUMN",
    domain: "https://autumnshop.kr",
    pages: [
      // "https://autumnshop.kr/product/list.html?cate_no=76", // new and all
      // "https://autumnshop.kr/product/list_best.html?cate_no=77", // best 50
      // "https://autumnshop.kr/product/list.html?cate_no=42", // outer
      // "https://autumnshop.kr/product/list.html?cate_no=48", // top
      // "https://autumnshop.kr/product/list.html?cate_no=59", // bottom
      // "https://autumnshop.kr/product/list.html?cate_no=49", // dress
      // "https://autumnshop.kr/product/list.html?cate_no=60", // shoes & bag
      // "https://autumnshop.kr/product/list.html?cate_no=61", // acc
      // --------------------------
      `https://autumnshop.kr/product/list.html?cate_no=76&sort_method=5`, // new and all
      `https://autumnshop.kr/product/list_best.html?cate_no=77&sort_method=5`, // best 50
      `https://autumnshop.kr/product/list.html?cate_no=42&sort_method=5`, // outer
      `https://autumnshop.kr/product/list.html?cate_no=48&sort_method=5`, // top
      `https://autumnshop.kr/product/list.html?cate_no=59&sort_method=5`, // bottom
      `https://autumnshop.kr/product/list.html?cate_no=49&sort_method=5`, // dress
      `https://autumnshop.kr/product/list.html?cate_no=60&sort_method=5`, // shoes & bag
      `https://autumnshop.kr/product/list.html?cate_no=61&sort_method=5`, // acc
    ],
    pagePagination: 4,
    cardSelector: ".xans-product-normalpackage .prdList > li",
    cartProductNameSelector: ".name",
    pdpHandler: autumnPdpHandler,
  },
  {
    enable: true,
    name: "LA-ROOM",
    domain: "https://la-room.kr",
    pages: [
      "https://la-room.kr", // index
      "https://la-room.kr/product/list.html?cate_no=66", // New Product
      // "https://la-room.kr/product/list.html?cate_no=73", // Hot Products
      "https://la-room.kr/product/list.html?cate_no=25", // TOP
      "https://la-room.kr/product/list.html?cate_no=26", // Bottom
      "https://la-room.kr/product/list.html?cate_no=24", // Outer
      "https://la-room.kr/product/list.html?cate_no=27", // Skirt
      "https://la-room.kr/product/list.html?cate_no=28", // Shoes and Bag
      "https://la-room.kr/product/list.html?cate_no=42", // Accessory
      // "https://la-room.kr/product/list.html?cate_no=87", // Shipping Today
    ],
    pagePagination: 5,
    cardSelector: ".xans-product-listnormal .mun-prd-list .mun-prd-list-cover",
    cartProductNameSelector: ".name",
    pdpHandler: laRoomPdpHandler,
  },
  // {
  //   enable: false,
  //   name: "VERY-YOU",
  //   domain: "https://veryyou.co.kr",
  //   pages: [
  //     "https://veryyou.co.kr/product/list.html?cate_no=36", // NEW 5%
  //     "https://veryyou.co.kr/product/list.html?cate_no=28", // OUTER
  //     "https://veryyou.co.kr/product/list.html?cate_no=25", // TOP
  //     "https://veryyou.co.kr/product/list.html?cate_no=26", // BOTTOM
  //     "https://veryyou.co.kr/product/list.html?cate_no=27", // DRESS
  //     // "https://veryyou.co.kr/product/list.html?cate_no=29", // SHOES
  //     // "https://veryyou.co.kr/product/list.html?cate_no=31", // ACCESSORY
  //   ],
  //   pagePagination: 2,
  //   cardSelector: ".prdList .xans-record-",
  //   cartProductNameSelector: ".name",
  //   pdpHandler: veryYouPdpHandler,
  // },
  {
    enable: true,
    name: "NEW_CHEAP_CHIC",
    domain: "https://newcheapchic.store",
    pages: [
      "https://newcheapchic.store/untitled-16", // OUTER
      "https://newcheapchic.store/untitled-17", // TOP
      "https://newcheapchic.store/untitled-18", // BOTTOM
      "https://newcheapchic.store/untitled-19", // ACCESSORY
    ],
    previewImgSelector: ".img",
    pagePagination: 2,
    pageQueryString: "productListPage",
    cardSelector: ".productListPage .shopProductWrapper",
    cartProductNameSelector: ".productName",
    pdpHandler: newCheapChicPdpHandler,
  },
  // {
  //   enable: true,
  //   name: "m123undeuxtrois",
  //   domain: "https://m.123undeuxtrois.com",
  //   pages: [
  //     // "https://m.123undeuxtrois.com/product/list2.html?cate_no=44", // NOUARTÉ 누아르테
  //     "https://m.123undeuxtrois.com/product/list.html?cate_no=45", // Outer
  //     "https://m.123undeuxtrois.com/product/list.html?cate_no=46", // TOP
  //     "https://m.123undeuxtrois.com/product/list.html?cate_no=47", // Bottom
  //     "https://m.123undeuxtrois.com/product/list.html?cate_no=48", // Dress/set
  //     "https://m.123undeuxtrois.com/product/list.html?cate_no=50", // shoes
  //   ],
  //   pagePagination: 2,
  //   cardSelector: ".prdList .xans-record-",
  //   cartProductNameSelector: ".name",
  //   pdpHandler: m123undeuxtroisHandler,
  // },
  {
    enable: true,
    name: "dipliti",
    domain: "https://dipliti.com",
    pages: [
      "https://dipliti.com/category/shop/153/", // SHOP
      // https://dipliti.com/category/new/172/, // NEW
    ],
    pagePagination: 1, // 他是單頁，不用改
    cardSelector: ".prdList > li",
    cartProductNameSelector: ".name",
    pdpHandler: diplitiHandler,
    callback: async (page) => {
      const cta = page.locator(".btnMore--prd");
      await cta.click();
      await scrollToTheBottom(page);
      await page.waitForTimeout(5000);

      await cta.click();
      await scrollToTheBottom(page);
      await page.waitForTimeout(5000);

      await cta.click();
      await scrollToTheBottom(page);
      await page.waitForTimeout(5000);

      await cta.click();
      await scrollToTheBottom(page);
      await page.waitForTimeout(5000);
    },
  },
  // {
  //   enable: false,
  //   name: "chielei",
  //   domain: "https://www.chielei.com", // 手工鞋
  //   pages: [
  //     "https://www.chielei.com/product/list.html?cate_no=101", // 24SS
  //   ],
  //   pagePagination: 2,
  //   cardSelector: ".prdList > li",
  //   cartProductNameSelector: ".name",
  //   pdpHandler: chieleiHandler,
  // },
  {
    enable: true,
    name: "clostudio",
    domain: "https://clostudio.kr",
    pages: [
      "https://clostudio.kr/product/list.html?cate_no=454", // NEW 5%
      // "https://clostudio.kr/product/list.html?cate_no=455", // BEST
      // "https://clostudio.kr/product/list.html?cate_no=456", // CLOSE MADE
      "https://clostudio.kr/product/list.html?cate_no=472", // All
    ],
    pagePagination: 3,
    cardSelector: ".prdList .item_list",
    cartProductNameSelector: ".name",
    cardLinkSelector: ".prdImg a",
    previewImgSelector: ".prdImg",
    pdpHandler: clostudioHandler,
  },
  // {
  //   enable: false,
  //   name: "rapture",
  //   domain: "https://www.about-rapture.kr/",
  //   pages: [
  //     "https://www.about-rapture.kr/allproduct?productListFilter=allFilter&productSortFilter=PRODUCT_ORDER_NO", // OUTER
  //   ],
  //   pageQueryString: "productListPage",
  //   pagePagination: 2,
  //   cardSelector: ".productListPage > .shopProductWrapper",
  //   cartProductNameSelector: ".productName",
  //   pdpHandler: raptureHandler,
  //   previewImgSelector: ".img",
  // },
  {
    enable: true,
    name: "tuziroom",
    domain: "https://tuziroom.com/",
    pages: [
      "https://tuziroom.com/category/all-item/28/", // All
      "https://tuziroom.com/new-5/72/", // New 5%
    ],
    pagePagination: 5,
    cardSelector: ".prdList .xans-record-",
    cartProductNameSelector: ".name",
    pdpHandler: tuziroomHandler
  },
  {
    enable: true,
    name: "hoibo",
    domain: "https://hoibo.kr/",
    pages: [
      "https://hoibo.kr/product/list.html?cate_no=46", // All
      "https://hoibo.kr/product/list.html?cate_no=51", // New 5%
      "https://hoibo.kr/product/list.html?cate_no=42", // Best
    ],
    pagePagination: 3,
    cardSelector: ".prdList .xans-record-",
    cartProductNameSelector: ".name",
    pdpHandler: hoiboHandler
  },
  {
    enable: true,
    name: "yourclothes",
    domain: "https://yourclothes.kr/",
    pages: [
      "https://yourclothes.kr/product/list.html?cate_no=86",
      // "https://yourclothes.kr/product/list.html?cate_no=86&sort_method=5", // All and new
    ],
    pagePagination: 4,
    cardSelector: ".prdList > .xans-record-",
    cartProductNameSelector: ".name",
    pdpHandler: yourclothesHandler
  },
  {
    enable: true,
    name: "vague",
    domain: "https://vague.kr/",
    pages: [
      "https://vague.kr/category/all/26/", // ALL
      "https://vague.kr/category/new-7/57/", // NEW 7%
    ],
    pagePagination: 5,
    cardSelector: ".prdList > .xans-record-",
    cartProductNameSelector: ".name",
    pdpHandler: vagueHandler
  },
  {
    enable: true,
    name: "33hoodie",
    domain: "https://33hoodie.com/",
    pages: [
      "https://33hoodie.com/product/list.html?cate_no=73", // Life style => New arrival
    ],
    pagePagination: 3,
    cardSelector: ".prdList > .xans-record-",
    cartProductNameSelector: ".name",
    pdpHandler: threeThreeHoodieHandler
  }
];

export const ALL_SITE_PAGES = [
  ...SITE_CONFIG.filter((site) => site.enable)
    .map((site) => site.pages)
    .flat(),
];
