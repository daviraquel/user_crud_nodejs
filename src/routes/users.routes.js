import { Router } from "express";

import createUserController from "../controllers/createUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import listUsersController from "../controllers/listUsers.controller";
import updateUserController from "../controllers/updateUser.controller";
import userLoginController from "../controllers/userLogin.controller";

import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyUserIsAdmMiddleware from "../middlewares/verifyUserIsAdm.middleware";
import verifyCredentialsMiddleware from "../middlewares/verifyCredentials.middleware";
import verifyAdmRightsMiddleware from "../middlewares/verifyAdmRights.middleware";

const router = Router();

router.post("", verifyEmailAvailabilityMiddleware, createUserController);
router.get(
  "",
  [verifyAuthTokenMiddleware, verifyUserIsAdmMiddleware],
  listUsersController
);
router.patch(
  "/:uuid",
  [verifyAuthTokenMiddleware, verifyAdmRightsMiddleware],
  updateUserController
);
router.delete(
  "/:uuid",
  [verifyAuthTokenMiddleware, verifyAdmRightsMiddleware],
  deleteUserController
);
router.post("/login", verifyCredentialsMiddleware, userLoginController);

export default router;
