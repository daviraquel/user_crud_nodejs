import { v4 as uuidv4 } from "uuid";
import * as bycrypt from "bcryptjs";
import users from "../database";

const createUserService = async (email, name, password, isAdm) => {
  const hashedPassword = await bycrypt.hash(password, 10);

  const createdOn = new Date();

  const newUser = {
    email,
    name,
    isAdm,
    password: hashedPassword,
    createdOn: createdOn,
    updatedOn: createdOn,
    uuid: uuidv4(),
  };

  users.push(newUser);

  return {
    status: 201,
    message: {
      uuid: newUser.uuid,
      createdOn: newUser.createdOn,
      updatedOn: newUser.updatedOn,
      name: newUser.name,
      email: newUser.email,
      isAdm: newUser.isAdm,
    },
  };
};

export default createUserService;
