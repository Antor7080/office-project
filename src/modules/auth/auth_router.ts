import { Router } from "express";
import { login, logout, generateNewAccessToken } from "./auth_controller";

const router = Router();
router.post("/login", login);
router.post("/logout", logout);
router.post("/refresh-token", generateNewAccessToken);

export default router;