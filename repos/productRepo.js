const ProductModel = require("../models/productModel");

const get = (page, pageSize, sort, dir, search) => {
  let filter = {};
  if (search) {
    filter = {
      $or: [
        { brand: { $regex: search, $options: "i" } },
        { model: { $regex: search, $options: "i" } },
        { category: { $regex: search, $options: "i" } },
        { price: { $regex: search } },
      ],
    };
  }

  return ProductModel.find(filter, { __v: 0 })
    .sort({ [sort]: dir })
    .skip((page - 1) * pageSize)
    .limit(pageSize);
};

const getCount = () => {
  return ProductModel.countDocuments();
};

const create = (data) => {
  const product = new ProductModel(data);
  return product.save();
};

const getById = (id) => {
  return ProductModel.findOne({ _id: id });
};

const update = (data, id) => {
  return ProductModel.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        brand: data.brand,
        model: data.model,
        price: data.price,
        inStock: data.inStock,
        category: data.category,
      },
    }
  );
};

const patch = (data, id) => {
  return ProductModel.findOneAndUpdate({ _id: id }, data);
};

const deleteProduct = (id) => {
  return ProductModel.findOneAndDelete({ _id: id });
};

module.exports = {
  get,
  create,
  getById,
  update,
  patch,
  deleteProduct,
  getCount,
};
