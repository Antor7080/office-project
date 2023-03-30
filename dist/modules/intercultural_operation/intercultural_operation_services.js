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
exports.getInterculturalOperationByGeneralInformationID = exports.getInterculturalOperationById = exports.addInterculturalOperationService = void 0;
const intercultural_operation_model_1 = __importDefault(require("./intercultural_operation_model"));
const addInterculturalOperationService = (interculturalOperationInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const interculturalOperation = new intercultural_operation_model_1.default(interculturalOperationInfo);
    return yield interculturalOperation.save();
});
exports.addInterculturalOperationService = addInterculturalOperationService;
const getInterculturalOperationById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield intercultural_operation_model_1.default.findById(id);
});
exports.getInterculturalOperationById = getInterculturalOperationById;
const getInterculturalOperationByGeneralInformationID = (generalInformationID) => __awaiter(void 0, void 0, void 0, function* () {
    return yield intercultural_operation_model_1.default.findOne({ generalInformationID });
});
exports.getInterculturalOperationByGeneralInformationID = getInterculturalOperationByGeneralInformationID;
