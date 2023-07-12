const fs = require("fs");
let contents = fs.readFileSync("keywords.txt").toString().split("\n");
var obj = {};

const res = [];
const result = [];
var convertJson;

const keywordTitle = [];

for (var i = 0; i < contents.length; i++) {
  res.push(contents[i].toString());
  obj = {
    [res[i].toString().split(" /+/ ")[0]]: [
      {
        channel: res[i].toString().split(" /+/ ")[1],

        time: res[i].toString().split(" /+/ ")[2],
      },
    ],
  };

  result.push(obj);
  convertJson = JSON.stringify(result);
}

fs.writeFileSync("keywords.json", convertJson, (err) => {
  if (err) throw err;
});
