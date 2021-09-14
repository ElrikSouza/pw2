import { ProductsRep } from "./products-rep.js";

// O service so repassa o que ta no repositorio porque nao ha
// passos adicionais como autorizacao por exemplo.

const getAllProducts = async () => {
  return ProductsRep.getAllProducts();
};

const getOneProduct = async (productId) => {
  return ProductsRep.getOneProduct(productId);
};

const createProduct = async (product) => {
  await ProductsRep.createProduct(product);
};

const updateProduct = async (productId, changes) => {
  await ProductsRep.updateProduct(productId, changes);
};

const deleteProduct = async (productId) => {
  await ProductsRep.deleteProduct(productId);
};

export const ProductsService = {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
