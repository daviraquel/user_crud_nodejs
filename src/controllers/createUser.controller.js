import createUserService from "../services/createUser.service";

const createUserController = async (request, response) => {
  const { email, name, password, isAdm } = request.body;
  const { status, message } = await createUserService(
    email,
    name,
    password,
    isAdm
  );
  return response.status(status).json(message);
};

export default createUserController;
