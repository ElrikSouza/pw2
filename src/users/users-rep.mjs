let users = [
  {
    username: "me1",
    password: "plaintextpasswordsaresafe",
  },
  {
    username: "me2",
    password: "plaintextpasswordsaresafe2",
  },
  {
    username: "me3",
    password: "plaintextpasswordsaresafe2",
  },
];

const findUserIndexByUsername = (username) => {
  const numOfUsers = users.length;

  for (let i = 0; i < numOfUsers; i++) {
    if (users[i].username === username) {
      return i;
    }
  }

  return -1;
};

export const getAllUsers = async () => users;

export const findUserByUsername = async (username) => {
  const userIndex = findUserIndexByUsername(username);

  if (userIndex === -1) {
    return null;
  }

  return users[userIndex];
};

export const updateUser = async (username, changes) => {
  const userIndex = findUserIndexByUsername(username);
  users[userIndex] = {
    ...users[userIndex],
    ...changes,
    username,
  };
};

export const addUser = async (user) => {
  users.push(user);
};

export const removeOneUser = async (username) => {
  users = users.filter((user) => user.username !== username);
};
