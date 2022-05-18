import updateUserService from "../services/updateUser.service";

const updateUserController = (request, response) => {
  const { name, email } = request.body;
  const requestUuid = request.params.uuid;

  if (request.body.isAdm) {
    return response.status(400).json({ message: "can't update adm status" });
  }

  const updatedUser = updateUserService(requestUuid, name, email);

  if (typeof updatedUser != "object") {
    return response.status(400).json({ message: updatedUser });
  }

  return response.status(201).json({
    uuid: updatedUser.uuid,
    createdOn: updatedUser.createdOn,
    updatedOn: updatedUser.updatedOn,
    name: updatedUser.name,
    email: updatedUser.email,
    isAdm: updatedUser.isAdm,
  });
};

export default updateUserController;
