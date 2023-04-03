"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const farmers_expenses_income_controller_1 = require("./farmers_expenses_income_controller");
const farmers_expenses_income_validator_1 = __importDefault(require("./farmers_expenses_income_validator"));
const router = (0, express_1.Router)();
router.post('/add', farmers_expenses_income_validator_1.default, farmers_expenses_income_controller_1.addFarmersExpensesIncomeController);
router.get('/get-by-general-info-id/:generalInformationID', farmers_expenses_income_controller_1.getInfoByGeneralInfoId);
router.get('/get/:_id', farmers_expenses_income_controller_1.getInfoById);
exports.default = router;
