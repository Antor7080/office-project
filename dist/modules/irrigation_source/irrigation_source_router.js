"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const irrigation_source_controller_1 = require("./irrigation_source_controller");
const irrigation_source_validator_1 = __importDefault(require("./irrigation_source_validator"));
const router = (0, express_1.Router)();
/*
    * @route   POST api/irrigation-source/add
    * @desc    Add Irrigation Source Information
    * @access  Public
    * @body    {generalInformationID, irrigationSource}
    * @return  {success, message, data}
    * @error   {success, message, error}
    * @example http://localhost:5000/api/irrigation-source/add
    *
*/
router.post("/add", irrigation_source_validator_1.default, irrigation_source_controller_1.addIrrigationSourceInfo);
/* * @route   GET api/irrigation-source/get/:id
    * @desc    Get Irrigation Source Information
    * @access  Public
    * @params    {id}
    * @return  {success, message, data}
    * @error   {success, message, error}
    * * @example http://localhost:5000/api/irrigation-source/get/5f9e1b0b0b1b1b1b1b1b1b1b * */
router.get("/get/:id", irrigation_source_controller_1.getIrrigationSourceInfo);
router.get("/get-by-general-information-id/:id", irrigation_source_controller_1.getByGeneralInformationID);
exports.default = router;
