const fs = require("fs");
export function exportArrayToJsonFile(array, filename) {
  return new Promise((resolve, reject) => {
    const jsonString = JSON.stringify(array, null, 2);
    fs.writeFile(filename, jsonString, "utf8", (err) => {
      if (err) {
        console.log("发生错误:", err);
        reject(err); // 拒绝 promise
      } else {
        console.log("文件已保存:", filename);
        resolve("ok"); // 解决 promise
      }
    });
  });
}
