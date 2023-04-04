"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("./user_controller");
const user_validator_1 = __importDefault(require("./user_validator"));
const router = (0, express_1.Router)();
router.get("/get-all", user_controller_1.getAllUserController);
router.get("/:phone", user_controller_1.getUserController);
router.post("/signup", user_validator_1.default, user_controller_1.createUser);
exports.default = router;
