const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const routes = require("./routes/index");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", routes);

app.listen(port, () => {
  console.log(`gee-server listening at http://localhost:${port}`);
});
