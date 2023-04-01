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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFertilizerFertilizingByGeneralInformationID = exports.getFertilizerFertilizing = exports.addFertilizerFertilizing = void 0;
const errors_1 = require("../../errors");
const responseHandler_1 = require("../../helpers/responseHandler");
const fertilizer_fertilizing_services_1 = require("./fertilizer_fertilizing_services");
/**
 *
 * @objective Add Fertilizer Fertilizing
 * @endpoint /api/v1/fertilizer-fertilizing/add
 * @method POST
 * @body {generalInformationID, landPreparationFertilizer, fertilizerNameQuantity, fertilizerNamePlant}
 * @response {status, message, data}
 * @description Add Fertilizer Fertilizing
 *
 */
const addFertilizerFertilizing = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const generalInformationID = req.body.generalInformationID;
        const isExsist = yield (0, fertilizer_fertilizing_services_1.findOneQuery)({ generalInformationID });
        if (isExsist) {
            throw new errors_1.ApiError((0, responseHandler_1.unProcessable)(), 'Fertilizer Fertilizing Already Exsist');
        }
        const fertilizerFertilizing = yield (0, fertilizer_fertilizing_services_1.createFertilizerFertilizing)(req.body);
        res.created(fertilizerFertilizing, 'Fertilizer Fertilizing Added Successfully');
    }
    catch (error) {
        next(error);
    }
});
exports.addFertilizerFertilizing = addFertilizerFertilizing;
/**
 *
 * @objective Get Fertilizer Fertilizing
 * @endpoint /api/v1/fertilizer-fertilizing/get/:id
 * @method GET
 * @response {status, message, data}
 * @description Get Fertilizer Fertilizing
 *
*/
const getFertilizerFertilizing = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const fertilizerFertilizing = yield (0, fertilizer_fertilizing_services_1.findOneQuery)({ _id: id });
        if (!fertilizerFertilizing) {
            throw new errors_1.ApiError((0, responseHandler_1.notFound)(), 'Fertilizer Fertilizing Not Found');
        }
        res.ok(fertilizerFertilizing, 'Fertilizer Fertilizing Get Successfully');
    }
    catch (error) {
        next(error);
    }
});
exports.getFertilizerFertilizing = getFertilizerFertilizing;
const getFertilizerFertilizingByGeneralInformationID = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const fertilizerFertilizing = yield (0, fertilizer_fertilizing_services_1.findOneQuery)({ generalInformationID: id });
        if (!fertilizerFertilizing) {
            throw new errors_1.ApiError((0, responseHandler_1.notFound)(), 'Fertilizer Fertilizing Not Found');
        }
        ;
        res.ok(fertilizerFertilizing, 'Fertilizer Fertilizing Get Successfully');
    }
    catch (error) {
        next(error);
    }
});
exports.getFertilizerFertilizingByGeneralInformationID = getFertilizerFertilizingByGeneralInformationID;
