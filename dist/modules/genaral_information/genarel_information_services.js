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
exports.findOneQuery = exports.getGeneralInformationService = exports.addGeneralInformationService = void 0;
const genarel_information_model_1 = __importDefault(require("./genarel_information_model"));
const addGeneralInformationService = (information) => {
    const newInformation = new genarel_information_model_1.default(information);
    newInformation.save();
    return newInformation;
};
exports.addGeneralInformationService = addGeneralInformationService;
const getGeneralInformationService = () => {
    const allInformation = genarel_information_model_1.default.find({});
    return allInformation;
};
exports.getGeneralInformationService = getGeneralInformationService;
/**
 *
 * @param id  get general information by id
 * @returns
 */
const findOneQuery = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const allInformation = yield genarel_information_model_1.default.findOne(query);
    if (!allInformation) {
        return null;
    }
    return allInformation;
});
exports.findOneQuery = findOneQuery;
