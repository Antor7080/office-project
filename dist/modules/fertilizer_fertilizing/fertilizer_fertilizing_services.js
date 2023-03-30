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
exports.findOneQuery = exports.createFertilizerFertilizing = void 0;
const fertilizer_fertilizing_model_1 = __importDefault(require("./fertilizer_fertilizing_model"));
const createFertilizerFertilizing = (fertilizerFertilizing) => __awaiter(void 0, void 0, void 0, function* () {
    const newFertilizerFertilizing = new fertilizer_fertilizing_model_1.default(fertilizerFertilizing);
    return yield newFertilizerFertilizing.save();
});
exports.createFertilizerFertilizing = createFertilizerFertilizing;
const findOneQuery = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fertilizer_fertilizing_model_1.default.findOne(query);
    if (!data)
        return null;
    return data;
});
exports.findOneQuery = findOneQuery;
