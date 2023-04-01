"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fertilizer_fertilizing_controller_1 = require("./fertilizer_fertilizing_controller");
const fertilizer_fertilizing_validator_1 = __importDefault(require("./fertilizer_fertilizing_validator"));
const router = (0, express_1.Router)();
/* * @route   POST api/fertilizer-fertilizing/add
    * @desc    Add Fertilizer Fertilizing
    * @access  Public
    * @body    {generalInformationID, landPreparationFertilizer, fertilizerNameQuantity, fertilizerNamePlant}
    * @return  {success, message, data}
    * @error   {success, message, error}
    * @example http://localhost:5000/api/fertilizer-fertilizing/add
    * */
router.post('/add', fertilizer_fertilizing_validator_1.default, fertilizer_fertilizing_controller_1.addFertilizerFertilizing);
/* * @route   GET api/fertilizer-fertilizing/get/:id
    * @desc    Get Fertilizer Fertilizing
    * @access  Public
    * @return  {success, message, data}
    * @error   {success, message, error}
    * @example http://localhost:5000/api/fertilizer-fertilizing/get/5f9f1b0b0b1b1b0b0b0b0b0b
    * */
router.get('/get/:id', fertilizer_fertilizing_controller_1.getFertilizerFertilizing);
/* * @route   GET api/fertilizer-fertilizing/get-by-general-information-id/:id
    * @desc    Get Fertilizer Fertilizing By General Information ID
    * @access  Public
    * @return  {success, message, data}
    * @error   {success, message, error}
    * @example http://localhost:5000/api/fertilizer-fertilizing/get-by-general-information-id/5f9f1b0b0b1b1b0b0b0b0b0b
    * */
router.get('/get-by-general-information-id/:id', fertilizer_fertilizing_controller_1.getFertilizerFertilizingByGeneralInformationID);
exports.default = router;
