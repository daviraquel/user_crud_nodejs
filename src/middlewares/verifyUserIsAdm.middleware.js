import users from "../database";
import jwt from "jsonwebtoken";

const verifyUserIsAdmMiddleware = (request, response, next) => {
  let token = request.headers.authorization;

  const tokenEmail = jwt.verify(token, "SECRET_KEY").email;

  const user = users.find((element) => element.email === tokenEmail);

  if (user === undefined) {
    return response.status(401).json({ message: "user not registered" });
  }

  if (!user.isAdm) {
    return response.status(401).json({ message: "Unauthorized" });
  }
  next();
};

export default verifyUserIsAdmMiddleware;
