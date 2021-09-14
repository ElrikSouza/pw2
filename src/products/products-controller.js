import { ProductsService } from "./products-service.js";

const index = async (_, res) => {
  const products = await ProductsService.getAllProducts();

  return res.status(200).send(products);
};

const read = async (req, res) => {
  const { productid } = req.params;

  const product = await ProductsService.getOneProduct(productid);

  if (product === NULL) {
    return res.status(404).send({ message: "Product not found." });
  }

  return res.status(200).send(product);
};

const create = async (req, res) => {
  const product = req.body;

  await ProductsService.createProduct(product);

  return res.status(201).send(product);
};

const update = async (req, res) => {
  const { productid } = req.params;
  const changes = req.body;

  await ProductsService.updateProduct(productid, changes);

  return res.status(200).send({ message: "The product has been updated" });
};

const del = async (req, res) => {
  const { productid } = req.params;

  await ProductsService.deleteProduct(productid);

  return res.status(200).send({ message: "The product has been deleted" });
};

export const ProductsController = {
  index,
  read,
  create,
  update,
  del,
};
