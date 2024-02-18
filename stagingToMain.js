function myFunction() {
  var sheetId = '1-k5prU7G5cp1ygIV4SqNN8-wcS6b1hRhLp8uaZJBU40';
  var spreadsheet = SpreadsheetApp.openById(sheetId);
  var sheet = spreadsheet.getSheets()[0]; // 取得第一個工作表

  var startRow = 3;
  var lastRow = sheet.getLastRow(); // 獲取有數據的最後一列的行號
  var productNum = 1;

  // 從第1列到最後一列的迴圈
  for (var row = startRow; row <= lastRow; row++) {
    function getVal(n) {
      return sheet.getRange(row, n).getValue();
    }
    function addRow(valueList) {
      var currentSheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
      var lastRow = currentSheet.getLastRow();
      var newRow = lastRow + 1;
      
      currentSheet.getRange('A' + newRow).setValue(valueList.A); // 商品編號*
      currentSheet.getRange('B' + newRow).setValue(valueList.B); // 商品名稱(英文)*
      currentSheet.getRange('C' + newRow).setValue(valueList.C); //商品名稱(繁體中文)*
      currentSheet.getRange('E' + newRow).setValue(valueList.E);  //商品摘要(繁體中文)
      // currentSheet.getRange('G' + newRow).setValue(valueList.G); //商品描述(繁體中文)
      currentSheet.getRange('I' + newRow).setValue(valueList.I); //SEO標題(繁體中文)
      currentSheet.getRange('K' + newRow).setValue(valueList.K); // SEO簡介(繁體中文)
      currentSheet.getRange('L' + newRow).setValue(valueList.L); // SEO關鍵字
      currentSheet.getRange('R' + newRow).setValue(valueList.R); // 主要相片 (max:12)
      currentSheet.getRange('S' + newRow).setValue(valueList.S); // 更多相片 (max 20)
      currentSheet.getRange('T' + newRow).setValue(valueList.T); // 網店分類
      currentSheet.getRange('X' + newRow).setValue(valueList.X); // 原價格
      currentSheet.getRange('AK' + newRow).setValue(valueList.AK); // 規格名稱1(英文)
      currentSheet.getRange('AM' + newRow).setValue(valueList.AM); // 規格名稱2(英文)
      currentSheet.getRange('AP' + newRow).setValue(valueList.AP); // 選項名稱A(英文) Color
      currentSheet.getRange('AR' + newRow).setValue(valueList.AR); // 選項名稱B(英文) Size
    }
    function mixColorAndSize(colorArr, sizeArr) {
      var result = [];
      colorArr.forEach((color) => {
        sizeArr.forEach((size) => {
          var newArr = [color, size];
          result.push(newArr);
        })
      })
      return result;
    };
    // 獲取A欄、B欄和C欄的值
    var nameChinese = getVal(1); // A欄
    var nameEng = getVal(2); // B欄
    var description = getVal(7); // C欄
    var imageList = getVal(8).split(" ");
    var colorList = getVal(9).split(" / ");
    var sizeList = getVal(10).split(" / ");
    var price = getVal(14);
    var category = getVal(11);

    // 在這裡根據獲取到的值進行您的操作
    // 例如，打印出這些值
    // Logger.log(nameChinese);
    // Logger.log(nameEng);
    // Logger.log(description);
    // Logger.log(imageList);
    // Logger.log(colorList);
    // Logger.log(sizeList);
    // Logger.log(price)

    var mainColor = colorList[0];
    var allColorToSize = mixColorAndSize(colorList, sizeList);
    
    // Logger.log(mainColor);
    // Logger.log(allColorToSize);

    allColorToSize.forEach((colorSizeArr, idx) => {
      if(idx === 0) {
        addRow({
          A: productNum,
          B: nameEng,
          C: nameChinese,
          E: description,
          I: 'wearever ' + nameChinese,
          K: '服裝選物,圓山捷運站,wearever,男裝選物,女裝選物,圓山服飾,韓國設計師品牌,韓國選品,韓國選物,韓國,',
          R: imageList.slice(0, 6).join(" "),
          S: imageList.slice(2).join(" "),
          T: category,
          X: price,
          AK: "Color",
          AM: "Size",
          AP: colorSizeArr[0],
          AR: colorSizeArr[1]
        })
      } else {
        addRow({
          A: productNum,
          B: nameEng,
          C: nameChinese,
          // E: description,
          I: 'wearever ' + nameChinese,
          // K: '服裝選物,圓山捷運站,wearever,男裝選物,女裝選物,圓山服飾,韓國設計師品牌,韓國選品,韓國選物,韓國,',
          R: imageList.slice(0, 6).join(" "),
          S: imageList.slice(2).join(" "),
          //T: "",
          X: price,
          //AK: "Color",
          //AM: "Size",
          AP: colorSizeArr[0],
          AR: colorSizeArr[1]
        })
      }
    })
    productNum++
  }
}
