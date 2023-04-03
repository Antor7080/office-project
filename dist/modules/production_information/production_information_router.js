"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const production_information_controller_1 = require("./production_information_controller");
const production_information_validator_1 = __importDefault(require("./production_information_validator"));
const router = (0, express_1.Router)();
/*
    * @route   POST api/production-information/add
    * @desc    Add Production Information
    * @access  Public
    * @body    {generalInformationID, productionInformation}
    * @return  {success, message, data}
    * @error   {success, message, error}
    * @example http://localhost:5000/api/production-information/add
    * */
router.post('/add', production_information_validator_1.default, production_information_controller_1.addProductionInformation);
/*
    * @route   GET api/production-information/get-production-information/:id
    * @desc    Get Production Information
    * @access  Public
    * @body    {id}
    * @return  {success, message, data}
    * @error   {success, message, error}
    * @example http://localhost:5000/api/production-information/get-production-information/5f9e1b0b0b1b1b1b1b1b1b1b
    * */
router.get("/get-production-information/:id", production_information_controller_1.getProductionInformation);
router.get("/get-by-general-information-id/:id", production_information_controller_1.getByGeneralInformationID);
exports.default = router;
