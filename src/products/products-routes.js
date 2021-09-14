import { Router } from "express";
import { ProductsController } from "./products-controller.js";

export const productsModule = Router()
  .get("/products", ProductsController.index)
  .post("/products", ProductsController.create)
  .get("products/:productid", ProductsController.read)
  .delete("products/:productid", ProductsController.del)
  .put("products/:productid", ProductsController.update);
