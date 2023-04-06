"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("./auth_controller");
const router = (0, express_1.Router)();
router.post("/login", auth_controller_1.login);
router.post("/logout", auth_controller_1.logout);
router.post("/refresh-token", auth_controller_1.generateNewAccessToken);
exports.default = router;
