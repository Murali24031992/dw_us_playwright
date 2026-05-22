const XLSX = require('xlsx');
const path = require('path');

function readLoginDetails() {
  const filePath = path.resolve(__dirname, '../..', 'LoginDetails', 'LoginDetails.xlsx');
  const workbook = XLSX.readFile(filePath);
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(worksheet);
  
  // Return the first row of data (username and password)
  if (data.length > 0) {
    return {
      username: data[0].UserName,
      password: data[0].Password
    };
  }
  
  throw new Error('No login details found in Excel file');
}

module.exports = { readLoginDetails };
