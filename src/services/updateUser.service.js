import users from "../database";

const updateUserService = (requestUuid, name, email) => {
  const userIndex = users.findIndex((element) => element.uuid === requestUuid);

  if (userIndex === -1) {
    return "user not found";
  }

  const updateData = {
    name,
    email,
    updatedOn: new Date(),
  };

  for (const key in updateData) {
    users[userIndex][key] = updateData[key];
  }

  return users[userIndex];
};

export default updateUserService;
