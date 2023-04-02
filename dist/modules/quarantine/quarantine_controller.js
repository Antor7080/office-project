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
exports.getOneByGeneralInformationId = exports.getOneById = exports.addQuarantinePestDiseasesController = void 0;
const errors_1 = require("../../errors");
const responseHandler_1 = require("../../helpers/responseHandler");
const quarantine_service_1 = require("./quarantine_service");
/**
 *
 * @objective Add Quarantine Pest Diseases Control
 * @endPoint /api/quarantine-pests-diseases/add
 * @method POST
 * @reqBody {
    "generalInformationID": "641a968de9fa2fd5a92053c3"
     quarantinePestDieases: {

     };
    quarantineNamePests: {....};
    quarantinePestDiseseName: {...};
    controlMeasures: {...};
    organicPesiticide: {....};
    chemicalPesticide: {....};
    fungicideBactericide: {....};
    insectDiseases: {...};
    vegetables: {....};
    mango: {....};
    betelLeaf: {....};,
}

 */
const addQuarantinePestDiseasesController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const generalInformationID = body.generalInformationID;
        const isExist = yield (0, quarantine_service_1.findOneQuary)({ generalInformationID });
        if (isExist) {
            const error = new errors_1.ApiError((0, responseHandler_1.unProcessable)(), 'Quarantine Pest Diseases Control is already exist');
            return next(error);
        }
        const newQuarantinePestDiseasesControl = yield (0, quarantine_service_1.addQuarantinePestDiseasesControlService)(body);
        res.created(newQuarantinePestDiseasesControl);
    }
    catch (error) {
        next(error);
    }
});
exports.addQuarantinePestDiseasesController = addQuarantinePestDiseasesController;
/**
 * @objective Get One Quarantine Pest Diseases Control
 * @endPoint /api/quarantine-pests-diseases/get/:id
 * @method GET
 * @reqParam id
 * @resBody {
        "generalInformationID": "641a968de9fa2fd5a92053c3"
     quarantinePestDieases: {

     };
    quarantineNamePests: {....};
    quarantinePestDiseseName: {...};
    controlMeasures: {...};
    organicPesiticide: {....};
    chemicalPesticide: {....};
    fungicideBactericide: {....};
    insectDiseases: {...};
    vegetables: {....};
    mango: {....};
    betelLeaf: {....};
}
*/
const getOneById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const quarantinePestDieases = yield (0, quarantine_service_1.findOneQuary)({ _id: id });
        if (!quarantinePestDieases) {
            const error = new errors_1.ApiError((0, responseHandler_1.notFound)(), 'Quarantine Pest Diseases Control is not exist');
            next(error);
        }
        res.ok(quarantinePestDieases, "Quarantine Pest Diseases Control is found");
    }
    catch (error) {
        next(error);
    }
});
exports.getOneById = getOneById;
/**
 *
 * @objective Get One Quarantine Pest Diseases Control By General Information Id
 * @endPoint /api/quarantine-pests-diseases/get-by-general-information-id/:id
 * @method GET
 * @reqParam id
 * @resBody {
        "generalInformationID": "641a968de9fa2fd5a92053c3"
        quarantinePestDieases: {....}
        quarantineNamePests: {.....}
        quarantinePestDiseseName: {....}
        controlMeasures: {....}
        organicPesiticide: {....}
        chemicalPesticide: {....}
        fungicideBactericide: {....}
        insectDiseases: {....}
        vegetables: {...}
        mango: {.....}
        betelLeaf: {....}
 */
const getOneByGeneralInformationId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const quarantinePestDieases = yield (0, quarantine_service_1.findOneQuary)({ generalInformationID: id });
        if (!quarantinePestDieases) {
            const error = new errors_1.ApiError((0, responseHandler_1.notFound)(), 'Quarantine Pest Diseases Control is not exist');
            next(error);
        }
        res.ok(quarantinePestDieases, "Quarantine Pest Diseases Control is found");
    }
    catch (error) {
        next(error);
    }
});
exports.getOneByGeneralInformationId = getOneByGeneralInformationId;
