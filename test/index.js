import { json } from "express";
import fs from "fs";
const data = 

// function formatter(oldFormat) {
//     Object.assign(oldFormat, oldFormat.data);
//     delete oldFormat.data;
// }

let parsedData = JSON.parse(data);

// // //Take care for array of results or single result
// if (parsedData instanceof Array) {
//     parsedData.map(customer => formtter(customer));
// } else {
//     formatter(parsedData);
// }

// let newJson = JSON.stringify(parsedData);
console.log(parsedData);

const content = "Some content!";

fs.writeFile("test/parsedData.js", parsedData, (err) => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});
