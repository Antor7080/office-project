"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const quarantine_controller_1 = require("./quarantine_controller");
const quarantine_validator_1 = __importDefault(require("./quarantine_validator"));
const router = (0, express_1.Router)();
router.post("/add", quarantine_validator_1.default, quarantine_controller_1.addQuarantinePestDiseasesController);
router.get("/get/:id", quarantine_controller_1.getOneById);
router.get("/get-by-general-information-id/:id", quarantine_controller_1.getOneByGeneralInformationId);
exports.default = router;
