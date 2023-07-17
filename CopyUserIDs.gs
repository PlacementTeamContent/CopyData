function copyData() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var range = sheet.getRange("A:A");
  var values = range.getValues();
  
  var lastRow = sheet.getLastRow();
  var firstCell = values[0][0];
  
  for (var i = 1; i <= lastRow; i++) {
    if (values[i][0] === "") {
      sheet.getRange(i + 1, 1).setValue(firstCell);
    } else {
      firstCell = values[i][0];
    }
  }
}
