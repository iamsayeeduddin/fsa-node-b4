const productRepo = require("../repos/productRepo");

// No of Data = pageSize
// totalRecords -> 100 ->
// pageSize -> 10
// pages -> totalRecords/pageSize

// totalRecords -> 105
// pageSize -> 10
// pages -> 11

const getAll = async (req, res) => {
  const page = +req.params.page || 1;
  const search = req.query.search;
  const pageSize = +req.params.size || 10;
  const sort = req.query.sort || "brand";
  const dir = req.query.dir || "asc";
  const products = await productRepo.get(page, pageSize, sort, dir, search);
  const totalRecords = await productRepo.getCount();

  let response = {
    metadata: {
      totalRecords,
      totalPages: Math.ceil(totalRecords / pageSize),
    },
    data: products,
  };

  res.status(200);
  res.json(response);
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
