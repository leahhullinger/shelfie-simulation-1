module.exports = {
  // getProducts: (req, res) => {
  //   res.status(200).send(inventory);
  // },

  getProducts: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .get_products()
      .then(products => {
        res.status(200).send(products);
      })
      .catch(error => {
        res.status(500).send(error);
      });
  },
  newProduct: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { product_name, product_price, image_url } = req.body;

    dbInstance
      .new_product(product_name, product_price, image_url)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(error => {
        res.status(500).send(error);
        console.log(error);
      });
  },
  deleteProduct: (req, res) => {
    const dbInstance = req.app.get("db");
    const { params } = req;

    dbInstance
      .delete_products([params.product_id])
      .then(() => res.sendStatus(200))
      .catch(error => {
        res.status(500).send({ errorMessage: "error at deleteProduct" });
      });
  }
};
