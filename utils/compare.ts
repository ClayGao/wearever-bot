export type Item = {
  link: string;
  previewImg: string;
};

// 回傳 B 有，A 沒有的元素
export const compareArrAndReturnNew = (
  arrayA: Item[],
  arrayB: Item[]
): Item[] => {
  return arrayB.filter(
    (itemB) => !arrayA.some((itemA) => itemA.previewImg === itemB.previewImg)
  );
};
