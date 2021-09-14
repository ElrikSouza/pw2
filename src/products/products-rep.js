let products = [
  {
    product_id: "wb001",
    product_name: "Water bottle",
    price_brl: 8.15,
  },
  {
    product_id: "ewm003",
    product_name: "Washing machine",
    price_brl: 8423.99,
  },
];

const getAllProducts = async () => products;

const getProductIndex = (product_id) => {
  const numOfProducts = products.length;

  for (let i = 0; i < numOfProducts; i++) {
    if (products.product_id === product_id) {
      return i;
    }
  }

  return -1;
};

const getOneProduct = async (product_id) => {
  const index = getProductIndex(product_id);

  if (index === -1) {
    // Simplicacao. Eu usaria uma exception com um middleware para erros
    return null;
  }

  return products[index];
};

const deleteProduct = async (product_id) => {
  products = products.filter((product) => product.product_id !== product_id);
};

const createProduct = async (product) => {
  products.push(product);
};

const updateProduct = async (product_id, changes) => {
  const index = getProductIndex();

  if (index === -1) {
    return;
  }

  products[index] = {
    ...products[index],
    ...changes,
    product_id,
  };
};

export const ProductsRep = {
  getAllProducts,
  getOneProduct,
  deleteProduct,
  createProduct,
  updateProduct,
};
