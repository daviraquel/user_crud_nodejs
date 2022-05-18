import userLoginService from "../services/userLogin.service";

const userLoginController = (request, response) => {
  const { email } = request.body;

  const { status, message } = userLoginService(email);

  return response.status(status).json({ token: message });
};

export default userLoginController;
