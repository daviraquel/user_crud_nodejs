import users from "../database";

const deleteUserService = (uuid) => {
  const userIndex = users.findIndex((element) => element.uuid === uuid);

  if (userIndex === -1) {
    return { status: 404, message: "User not found" };
  }

  users.splice(userIndex, 1);

  return { status: 200, message: "User deleted with success" };
};

export default deleteUserService;
