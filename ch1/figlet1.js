var figlet = require("figlet");

figlet("Flower", function (err, data) {
  if (err) {
    console.log("Some");
    console.dir(err);
    return;
  }
  console.log(data);
});
