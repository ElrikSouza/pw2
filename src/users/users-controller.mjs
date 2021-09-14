import {
  getOneUser,
  getUsers,
  deleteOneUser,
  updateOneUser,
  createUser,
} from "./users-service.mjs";

export const index = async (_, res) => {
  const users = await getUsers();

  return res.status(200).send(users);
};

export const read = async (req, res) => {
  const { username } = req.params;

  const user = await getOneUser(username);

  if (user === null) {
    return res.status(400).send({ message: "User could not be found." });
  }

  return res.status(200).send(user);
};

export const update = async (req, res) => {
  const { username } = req.params;
  const changes = req.body;

  await updateOneUser(username, changes);

  return res.status(200).send({ message: "User has been updated." });
};

export const create = async (req, res) => {
  const user = req.body;

  await createUser(user);

  return res.status(201).send(user);
};

export const deleteUser = async (req, res) => {
  const { username } = req.params;
  await deleteOneUser(username);
  return res.status(200).send({ message: "User has been deleted." });
};
