//json

const fs = require("fs");

// const fs = require("fs");

// const book = { 
//     title: 'Ego',
//     author: 'Ryan'

//    }

// const bookJson = JSON.stringify(book)
// console.log(bookJson);
// //const parsedData = JSON.parse(bookJson)
// //console.log(parsedData);

// fs.writeFileSync('1--json.json', bookJson)  //write in json

// const databuffer = fs.readFileSync('1--json.json') //read from json 
// const dataJson = databuffer.toString();

// const data = JSON.parse(dataJson)
// console.log(data.title);

// changing json values!
const dataRead = fs.readFileSync('1--json.json')
const dataString = dataRead.toString()
console.log(dataString);

const data = JSON.parse(dataString)
console.log(data.name + " " + data.age);

data.name = "ashraf"
data.age = 35 
data.planet = "moon"
const writeData = JSON.stringify(data)
fs.writeFileSync('1--json.json',writeData)


