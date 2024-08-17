const fs = require("fs");

function op(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
}

fs.readFile("sat/a.txt", "utf-8", op);
