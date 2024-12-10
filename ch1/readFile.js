import fs from "fs";
import fs from "fs/promises";

// 콜백
// fs.readFile("./readme.txt", (err, data) => {
//   if (err) {
//     throw err;
//   }

//   console.log(data);
//   console.log(data.toString());
// });

// promises
fs.readFile("./readme.txt")
  .then(data)
  .catch((err) => console.log(err));
