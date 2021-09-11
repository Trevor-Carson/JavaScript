/****************************************************************************************************
*** File Name:      read_text_file_line_by_line.js
*** Description:    JavaScript to read a text file
*** Author:         Trevor Carson
*** Date:           2021-09-11
*****************************************************************************************************/

const readline = require('readline');               // Includes the Read Line module for Node.js
const fs = require('fs');                           // Includes the File System module for Node.js

// Parameter to hold a stream return value from a text file
const myInterface = readline.createInterface({
    input: fs.createReadStream('shoppingList.txt')
});

// Method to print a line from a text file
const printData = (data) => {
    console.log(`TextFileLine: ${data}`);
};

myInterface.on('line', printData);