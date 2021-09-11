/****************************************************************************************************
*** File Name:      read_text_file.js
*** Description:    JavaScript to read a text file
*** Author:         Trevor Carson
*** Date:           2021-09-11
*****************************************************************************************************/

const fs = require('fs');

let readDataCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong: ${err}`);
  } else {
    console.log(`Provided file contained: ${data}`);
  }
};

fs.readFile("./test.txt", "utf-8", readDataCallback);