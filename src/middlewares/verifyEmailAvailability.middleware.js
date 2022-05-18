import users from "../database";

const verifyEmailAvailabilityMiddleware = (request, response, next) => {
  const { email } = request.body;

  const userAlreadyExists = users.find((element) => element.email === email);

  if (userAlreadyExists) {
    return response.status(400).json({ message: "E-mail already registered" });
  }
  next();
};

export default verifyEmailAvailabilityMiddleware;
