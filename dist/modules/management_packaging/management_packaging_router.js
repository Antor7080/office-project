"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const management_packaging_controller_1 = require("./management_packaging_controller");
const management_packaging_validator_1 = __importDefault(require("./management_packaging_validator"));
const router = (0, express_1.Router)();
router.post("/add", management_packaging_validator_1.default, management_packaging_controller_1.add);
router.get("/get/:id", management_packaging_controller_1.getOneById);
router.get("/get-by-general-information-id/:id", management_packaging_controller_1.getOneByGeneralInformationId);
exports.default = router;
