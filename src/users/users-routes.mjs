import { Router } from "express";
import {
  index,
  deleteUser,
  read,
  create,
  update,
} from "./users-controller.mjs";

export const usersRoutes = Router()
  .get("/users", index)
  .get("/users/:username", read)
  .post("/users", create)
  .put("/users/:username", update)
  .delete("/users/:username", deleteUser);
