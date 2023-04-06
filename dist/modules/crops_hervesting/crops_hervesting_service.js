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
exports.findOneCropsHarvesting = exports.addCropsHarvestingService = void 0;
const crops_hervesting_model_1 = __importDefault(require("./crops_hervesting_model"));
/**
 * @objective add new crops harvesting
 * @param iropsHarvestingInfo
 * @returns ICropsHarvesting
 * */
const addCropsHarvestingService = (iropsHarvestingInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const cropsHarvesting = new crops_hervesting_model_1.default(iropsHarvestingInfo);
    return yield cropsHarvesting.save();
});
exports.addCropsHarvestingService = addCropsHarvestingService;
/**
 * @objective get all crops harvesting
 * @returns ICropsHarvesting[]
 *
 */
const findOneCropsHarvesting = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const cropsHarvesting = yield crops_hervesting_model_1.default.findOne(query);
    return cropsHarvesting;
});
exports.findOneCropsHarvesting = findOneCropsHarvesting;
