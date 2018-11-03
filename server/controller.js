module.exports = {
  // getProducts: (req, res) => {
  //   res.status(200).send(inventory);
  // },

  getInventory: (req, res, next) => {
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
  getProduct: (req, res) => {
    const dbInstance = req.app.get("db");
    const { product_id } = req.params;

    dbInstance
      .get_product(product_id)
      .then(product => {
        res.status(200).send(product);
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
  editProduct: (req, res) => {
    const dbInstance = req.app.get("db");

    const { product_id } = req.params;
    const { product_name, product_price, image_url } = req.body;

    dbInstance
      .update_product(product_id, product_name, product_price, image_url)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  deleteProduct: (req, res) => {
    const dbInstance = req.app.get("db");
    const { product_id } = req.params;

    dbInstance
      .delete_product([product_id])
      .then(() => res.sendStatus(200))
      .catch(error => {
        res.status(500).send(error, { errorMessage: "error at deleteProduct" });
      });
  }
};
