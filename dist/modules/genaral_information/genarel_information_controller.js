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
exports.getGeneralInformationById = exports.getGeneralInformation = exports.addGeneralInformation = void 0;
const errors_1 = require("../../errors");
const responseHandler_1 = require("../../helpers/responseHandler");
const genarel_information_services_1 = require("./genarel_information_services");
const addGeneralInformation = (req, res, next) => {
    try {
        const newGenarelInformation = (0, genarel_information_services_1.addGeneralInformationService)(req.body);
        res.created(newGenarelInformation, 'General Information Added Successfully');
    }
    catch (error) {
        next(error);
    }
};
exports.addGeneralInformation = addGeneralInformation;
const getGeneralInformation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allGenarelInformation = yield (0, genarel_information_services_1.getGeneralInformationService)();
        res.ok(allGenarelInformation, 'General Information Get Successfully');
    }
    catch (error) {
        next(error);
    }
});
exports.getGeneralInformation = getGeneralInformation;
const getGeneralInformationById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const allGenarelInformation = yield (0, genarel_information_services_1.getGeneralInformationByIDService)(id);
        if (!allGenarelInformation) {
            throw new errors_1.ApiError((0, responseHandler_1.notFound)(), 'General Information Not Found');
        }
        res.ok(allGenarelInformation, 'General Information Get Successfully');
    }
    catch (error) {
        next(error);
    }
});
exports.getGeneralInformationById = getGeneralInformationById;
