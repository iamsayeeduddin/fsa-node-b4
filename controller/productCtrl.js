const productRepo = require("../repos/productRepo");

const getAll = async (req, res) => {
  const products = await productRepo.get();
  res.status(200);
  res.json(products);
};

const addProduct = async (req, res) => {
  try {
    const data = req.body;
    const product = await productRepo.create(data);
    res.status(201);
    res.json(product);
  } catch (err) {
    res.status(500);
    res.json(err);
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productRepo.getById(id);
    res.status(200);
    res.json(product);
  } catch (err) {
    res.status(401);
    res.send("Not Found");
  }
};

const put = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await productRepo.update(data, id);
    res.status(201);
    res.send("Product Updated");
  } catch (error) {
    res.status(500);
    res.send("Internal Server Error");
  }
};

const patch = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await productRepo.update(data, id);
    res.status(201);
    res.send("Product Updated");
  } catch (error) {
    res.status(500);
    res.send("Internal Server Error");
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    await productRepo.deleteProduct(id);
    res.status(204);
    res.send();
  } catch (error) {
    res.status(500);
    res.send("Internal Server Error");
  }
};

module.exports = {
  getAll,
  addProduct,
  getSingleProduct,
  put,
  patch,
  remove,
};
