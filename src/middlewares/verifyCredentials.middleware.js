import * as bycrypt from "bcryptjs";

import users from "../database";

const verifyCredentialsMiddleware = (request, response, next) => {
  const { email, password } = request.body;
  const user = users.find((element) => element.email === email);

  if (!user) {
    return response.status(401).json({ message: "Wrong email/password" });
  }

  const passwordMatch = bycrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    return response.status(401).json({ message: "Wrong email/password" });
  }
  next();
};

export default verifyCredentialsMiddleware;
