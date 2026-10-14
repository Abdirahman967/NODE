// Task 3 (part 2): read and console.log the data from hello.txt
const fs = require("fs");

fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Could not read hello.txt:", err.message);
    return;
  }
  console.log(data);
});
