import jwt from "jsonwebtoken";
import users from "../database";

const verifyAdmRightsMiddleware = (request, response, next) => {
  const token = request.headers.authorization;

  const tokenEmail = jwt.verify(token, "SECRET_KEY").email;
  const tokenUser = users.find((element) => element.email === tokenEmail);

  if (!tokenUser) {
    return response.status(401).json({ message: "invalid token" });
  }

  const requestUuid = request.params.uuid;
  if (!requestUuid) {
    return response.status(400).json({ message: "missing uuid param" });
  }

  const tokenUuid = tokenUser.uuid;
  const tokenIsAdm = tokenUser.isAdm;

  if (tokenUuid != requestUuid && tokenIsAdm === false) {
    return response.status(401).json({ message: "Unauthorized" });
  }

  next();
};

export default verifyAdmRightsMiddleware;
