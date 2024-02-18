export const HIFIFNK = {
  HOME: { name: "HIFIFNK => homepage", url: "https://hififnk.kr" },
  NEW_ARRIVAL: {
    name: "HIFIFNK => new arrival",
    url: "https://hififnk.kr/product/list.html?cate_no=170",
  },
  OUTER: {
    name: "HIFIFNK => outer",
    url: "https://hififnk.kr/category/outerwears/171/",
  },
  TOPS: {
    name: "HIFIFNK => top",
    url: "https://hififnk.kr/category/tops/173/",
  },
  SHIRTS: {
    name: "HIFIFNK => shirts",
    url: "https://hififnk.kr/category/shirts/174/",
  },
  PANTS: {
    name: "HIFIFNK => pants",
    url: "https://hififnk.kr/category/pants/175/",
  },
};

export const MTSU = {
  HOME: { name: "MTSU => homepage", url: "https://tsumu.co.kr/index.html" },
  BEST: {
    name: "MTSU => best",
    url: "https://tsumu.co.kr/product/list.html?cate_no=26",
  },
  OUTER: {
    name: "MTSU => outer",
    url: "https://tsumu.co.kr/product/list.html?cate_no=24",
  },
  TOP: {
    name: "MTSU => top",
    url: "https://tsumu.co.kr/product/list.html?cate_no=25",
  },
  PANTS: {
    name: "MTSU => pants",
    url: "https://tsumu.co.kr/product/list.html?cate_no=28",
  },
  ACC: {
    name: "MTSU => accessories",
    url: "https://tsumu.co.kr/product/list.html?cate_no=30",
  },
  SALE: {
    name: "MTSU => sale",
    url: "https://tsumu.co.kr/product/list.html?cate_no=31",
  },
};

const FOCUS_ON_NEW_PRODUCT = true;
const autumnAddQueryString = FOCUS_ON_NEW_PRODUCT ? "&sort_method=5" : "";

export const AUTUMN = {
  HOME: { name: "AUTUMN => homepage", url: "https://autumnshop.kr" },
  NEW_AND_ALL: {
    name: "AUTUMN => new and all",
    url: `https://autumnshop.kr/product/list.html?cate_no=76${autumnAddQueryString}`,
  },
  BEST_50: {
    name: "AUTUMN => best 50",
    url: `https://autumnshop.kr/product/list_best.html?cate_no=77${autumnAddQueryString}`,
  },
  OUTER: {
    name: "AUTUMN => outer",
    url: `https://autumnshop.kr/product/list.html?cate_no=42${autumnAddQueryString}`,
  },
  TOP: {
    name: "AUTUMN => top",
    url: `https://autumnshop.kr/product/list.html?cate_no=48${autumnAddQueryString}`,
  },
  BOTTOM: {
    name: "AUTUMN => bottom",
    url: `https://autumnshop.kr/product/list.html?cate_no=59${autumnAddQueryString}`,
  },
  DRESS: {
    name: "AUTUMN => dress",
    url: `https://autumnshop.kr/product/list.html?cate_no=49${autumnAddQueryString}`,
  },
  SHOES_AND_BAG: {
    name: "AUTUMN => shoes & bag",
    url: `https://autumnshop.kr/product/list.html?cate_no=60${autumnAddQueryString}`,
  },
  ACC: {
    name: "AUTUMN => acc",
    url: `https://autumnshop.kr/product/list.html?cate_no=61${autumnAddQueryString}`,
  },
};
