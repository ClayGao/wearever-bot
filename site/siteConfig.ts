import {
  autumnPdpHandler,
  mstuPdpHandler,
  hifiPdpHandler,
  laRoomPdpHandler,
  veryYouPdpHandler,
} from "./sitePdpHandler";

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
export const SITE_CONFIG = [
  {
    enable: true,
    name: "HIFIFNK",
    domain: "https://hififnk.kr",
    pages: [
      "https://hififnk.kr/product/list.html?cate_no=170", // new arrival
      "https://hififnk.kr/category/outerwears/171/", // outer
      "https://hififnk.kr/category/tops/173/", // top
      "https://hififnk.kr/category/shirts/174/", // shirts
      "https://hififnk.kr/category/pants/175/", // pants
    ],
    pagePagination: 2,
    cardSelector: "#grid2-2-4 > li .mun-prd-thumb",
    pdpHandler: hifiPdpHandler,
  },
  {
    enable: true,
    name: "MTSU",
    domain: "https://tsumu.co.kr",
    pages: [
      "https://tsumu.co.kr/product/list.html?cate_no=62", // New 7%
      "https://tsumu.co.kr/product/list.html?cate_no=26", // best
      "https://tsumu.co.kr/product/list.html?cate_no=24", // outer
      "https://tsumu.co.kr/product/list.html?cate_no=25", // top
      "https://tsumu.co.kr/product/list.html?cate_no=28", // pants
      "https://tsumu.co.kr/product/list.html?cate_no=30", // accessories
      "https://tsumu.co.kr/product/list.html?cate_no=31", // sale
    ],
    pagePagination: 2,
    cardSelector: ".prdList > li .thumbnail",
    pdpHandler: mstuPdpHandler,
  },
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
    pagePagination: 2,
    cardSelector: ".xans-product-normalpackage .prdList > li .thumbnail",
    pdpHandler: autumnPdpHandler,
  },
  {
    enable: true,
    name: "LA-ROOM",
    domain: "https://la-room.kr",
    pages: [
      "https://la-room.kr/product/list.html?cate_no=66", // New Product
      "https://la-room.kr/product/list.html?cate_no=73", // Hot Products
      "https://la-room.kr/product/list.html?cate_no=25", // TOP
      "https://la-room.kr/product/list.html?cate_no=26", // Bottom
      "https://la-room.kr/product/list.html?cate_no=24", // Outer
      "https://la-room.kr/product/list.html?cate_no=27", // Skirt
      "https://la-room.kr/product/list.html?cate_no=28", // Shoes and Bag
      "https://la-room.kr/product/list.html?cate_no=42", // Accessory
      // "https://la-room.kr/product/list.html?cate_no=87", // Shipping Today
    ],
    pagePagination: 2,
    cardSelector: ".mun-prd-list .mun-prd-thumb",
    pdpHandler: laRoomPdpHandler,
  },
  {
    enable: false,
    name: "VERY-YOU",
    domain: "https://m.veryyou.co.kr",
    pages: [],
    pagePagination: 5,
    cardSelector: "",
    pdpHandler: veryYouPdpHandler,
  },
];

export const ALL_SITE_PAGES = [
  ...SITE_CONFIG.filter((site) => site.enable)
    .map((site) => site.pages)
    .flat(),
];
