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
exports.findOneQuary = exports.addQuarantinePestDiseasesControlService = void 0;
const quarantine_model_1 = __importDefault(require("./quarantine_model"));
/**
 * @objective add new quarantine pest diseases control
 * @param quarantinePestDiseasesControl
 * @returns
 */
const addQuarantinePestDiseasesControlService = (quarantinePestDiseasesControl) => __awaiter(void 0, void 0, void 0, function* () {
    const newQuarantinePestDiseasesControl = new quarantine_model_1.default(quarantinePestDiseasesControl);
    yield newQuarantinePestDiseasesControl.save();
    return newQuarantinePestDiseasesControl;
});
exports.addQuarantinePestDiseasesControlService = addQuarantinePestDiseasesControlService;
/**
 * @objective get one quarantine pest diseases control
 * @param query
 * @returns
 */
const findOneQuary = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const quarantinePestDieases = quarantine_model_1.default.findOne(query);
    return quarantinePestDieases;
});
exports.findOneQuary = findOneQuary;
