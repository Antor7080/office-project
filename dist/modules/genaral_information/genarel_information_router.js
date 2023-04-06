"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const genarel_information_controller_1 = require("./genarel_information_controller");
const genarel_information_validator_1 = __importDefault(require("./genarel_information_validator"));
const router = (0, express_1.Router)();
/* ? @route   POST api/general-information/add
    * @desc    Add General Information
    * @access  Public
    * @body    {generalInformation}
    * @return  {success, message, data}
    * @error   {success, message, error}
    * @example http://localhost:5000/api/general-information/add
    * */
router.post('/add', /*  authorization(["Farmer", "Admin"]), */ genarel_information_validator_1.default, genarel_information_controller_1.addGeneralInformation);
/*
    * @route   GET api/general-information/get
    * @desc    Get General Information
    * @access  Public
    * @return  {success, message, data}
    * @error   {success, message, error}
    * * @example http://localhost:5000/api/general-information/get * */
router.get('/', genarel_information_controller_1.getGeneralInformation);
/* * @route   GET api/general-information/get/:id
    * @desc    Get General Information By Id
    * @access  Public
    * @params    {id}
    * @return  {success, message, data}
    * @error   {success, message, error}
    * * @example http://localhost:5000/api/general-information/get/5f9e1b0b0b1b1b1b1b1b1b1b * */
router.get('/:id', genarel_information_controller_1.getGeneralInformationById);
exports.default = router;
