import Express, { json } from "express";
import { productsModule } from "./products/products-routes.js";
import { usersRoutes } from "./users/users-routes.mjs";

const app = Express();

app.use(json());
app.use(usersRoutes);
app.use(productsModule);

export { app };
