const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const massive = require("massive");
require("dotenv").config();

const controller = require("./controller");

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
});
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/api/inventory", controller.getInventory);
app.get("/api/product/:product_id", controller.getProduct);
app.post("/api/product", controller.newProduct);
app.put("/api/product/:product_id", controller.editProduct);
app.delete("/api/product/:product_id", controller.deleteProduct);

const port = 3005;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
