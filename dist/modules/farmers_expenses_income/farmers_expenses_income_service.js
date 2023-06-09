"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOneQuary = exports.addFarmersExpensesIncome = void 0;
const farmers_expenses_income_model_1 = __importDefault(require("./farmers_expenses_income_model"));
/**
 * @objective add new farmers expenses income
 * @param farmersExpensesIncome
 * @returns
 */
const addFarmersExpensesIncome = (farmersExpensesIncome) => __awaiter(void 0, void 0, void 0, function* () {
    const newFarmersExpensesIncome = new farmers_expenses_income_model_1.default(farmersExpensesIncome);
    return yield newFarmersExpensesIncome.save();
});
exports.addFarmersExpensesIncome = addFarmersExpensesIncome;
/**
 * @objective get one farmers expenses income
 * @param query
 * @returns
 */
const findOneQuary = (query) => __awaiter(void 0, void 0, void 0, function* () {
    return yield farmers_expenses_income_model_1.default.findOne(query);
});
exports.findOneQuary = findOneQuary;
