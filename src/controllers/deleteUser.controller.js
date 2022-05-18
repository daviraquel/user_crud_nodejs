import deleteUserService from "../services/deleteUser.service";

const deleteUserController = (request, response) => {
  const { uuid } = request.params;
  const { status, message } = deleteUserService(uuid);

  return response.status(status).json({ message: message });
};

export default deleteUserController;
