// Task 3 (part 1): use the file system module to create welcome.txt
const fs = require("fs");

fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) {
    console.error("Could not create welcome.txt:", err.message);
    return;
  }
  console.log("welcome.txt created successfully");
});
