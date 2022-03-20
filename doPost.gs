function doPost(e) {
  
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('log');

  sheet.getRange('A1').setValue('Hello, world!');

  // log
  
}
