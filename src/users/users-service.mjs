import * as UserRep from "./users-rep.mjs";
import { getAllUsers } from "./users-rep.mjs";

export const getUsers = async () => {
  return getAllUsers();
};

export const getOneUser = async (username) => {
  return UserRep.findUserByUsername(username);
};

export const deleteOneUser = async (username) => {
  await UserRep.removeOneUser(username);
};

export const createUser = async (user) => {
  await UserRep.addUser(user);
};

export const updateOneUser = async (username, changes) => {
  await UserRep.updateUser(username, changes);
};
