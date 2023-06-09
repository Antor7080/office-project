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
exports.findOneQuery = exports.addIrrigationSource = void 0;
const irrigation_source_model_1 = __importDefault(require("./irrigation_source_model"));
/**
 * @objective add new irrigation source
 * @param irrigationSourceInfo
 * @returns
 */
const addIrrigationSource = (irrigationSourceInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const newIrrigationSource = new irrigation_source_model_1.default(irrigationSourceInfo);
    yield newIrrigationSource.save();
    return newIrrigationSource;
});
exports.addIrrigationSource = addIrrigationSource;
/** \
 * @objective get one irrigation source
 * @param generalInformationID
 * @returns
*/
const findOneQuery = (info) => __awaiter(void 0, void 0, void 0, function* () {
    return yield irrigation_source_model_1.default.findOne(info);
});
exports.findOneQuery = findOneQuery;
