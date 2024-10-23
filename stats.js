const fs = require("fs");

const inputFile = "10000-common-passwords.csv";
const outputFile = "statistics.csv";
const delimiter = ",";

function deleteExistingOutputFile() {
  if (fs.existsSync(outputFile)) {
    fs.unlinkSync(outputFile);
  }
}

function processData() {
  let lengths = new Array(25).fill(0);
  const data = fs.readFileSync(inputFile, "utf-8");
  const lines = data.split(/\n/);
  //console.log(data);
  //console.log(lines);

  for (let line of lines) {
    elements = line.split(delimiter);
    let len = elements[1].length;
    lengths[len]++;
  }

  for(let i=0; i < lengths.length; i++) {
    let outputline = `Char: ${i}, Count ${lengths[i]}\n`;
    fs.appendFileSync(outputFile, outputline);

  }

  //console.log(`Char[${lengths}]`)
}
deleteExistingOutputFile();
processData();
/*let myOutputFile = processData();
let lengths = Array(20).fill(0)
for(element of myOutputFile){
  passLength= element[1].length;
  lengths[passLength]++
}
console.log(lengths)

// myOutputFile.push(processData())
const tally ={};
let targetId = ['id']
let targetPass = ['len']

// let dataset = []
// dataset = data.forEach(function(d){
//      d['count'] = 0;
//      return d
// })
// console.log(dataset);
// let lengths = new Array(20).fill(0)
// Main execution
// deleteExistingOutputFile(); 
// processData();
*/
