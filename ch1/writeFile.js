import fs from "fs";

fs.writeFile("./writeme.txt", "글을 작성합니다.", (err) => {
  if (err) throw err;

  fs.writeFile("./writeme.txt", (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  });
});
