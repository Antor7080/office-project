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
exports.getOneQuary = exports.addProductionInformationService = void 0;
const production_information_model_1 = __importDefault(require("./production_information_model"));
/**
 * @objective add new production information
 * @param information
 * @returns
 */
const addProductionInformationService = (information) => __awaiter(void 0, void 0, void 0, function* () {
    const newInformation = new production_information_model_1.default(information);
    yield newInformation.save();
    return newInformation;
});
exports.addProductionInformationService = addProductionInformationService;
/**
 * @objective get all one information
 * @param query
 * @returns
 */
const getOneQuary = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const productionInfo = yield production_information_model_1.default.findOne(query);
    return productionInfo;
});
exports.getOneQuary = getOneQuary;
// generalInformationID
