import { Router } from "express";
import { createUser, getAllUserController, getUserController } from "./user_controller";
import userValidator from "./user_validator";

const router = Router();

router.get("/get-all", getAllUserController);
router.get("/:phone", getUserController);
router.post("/signup", userValidator, createUser);

export default router;
