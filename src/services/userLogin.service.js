import jwt from "jsonwebtoken";

const userLoginService = (email) => {
  const token = jwt.sign({ email: email }, "SECRET_KEY", { expiresIn: "24h" });

  return { status: 200, message: token };
};

export default userLoginService;
