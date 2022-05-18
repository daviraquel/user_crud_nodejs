import jwt from "jsonwebtoken";

const verifyAuthTokenMiddleware = (request, response, next) => {
  const token = request.headers.authorization;

  if (!token) {
    return response
      .status(401)
      .json({ message: "missing authorization headers" });
  }

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return response.status(401).json({ message: "invalid token" });
    }
  });

  next();
};

export default verifyAuthTokenMiddleware;
