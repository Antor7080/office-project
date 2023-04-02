"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const intercultural_operation_controller_1 = require("./intercultural_operation_controller");
const router = (0, express_1.Router)();
const intercultural_operation_validator_1 = __importDefault(require("./intercultural_operation_validator"));
/*
    * @route   POST api/intercultural-operation/add
    * @desc    Add Intercultural Operation Information
    * @access  Public
    * @body    {generalInformationID, interculturalOperation}
    * @return  {success, message, data}
    * @error   {success, message, error}
    * @example http://localhost:5000/api/intercultural-operation/add
    *
*/
router.post("/add", intercultural_operation_validator_1.default, intercultural_operation_controller_1.addInterculturalOperation);
/* * @route   GET api/intercultural-operation/get/:id
    * @desc    Get Intercultural Operation Information
    * @access  Public
    * @params    {id}
    * @return  {success, message, data}
    * @error   {success, message, error}
    * * @example http://localhost:5000/api/intercultural-operation/get/5f9e1b0b0b1b1b1b1b1b1b1b * */
router.get("/get/:id", intercultural_operation_controller_1.getById);
router.get("/get-by-general-information-id/:id", intercultural_operation_controller_1.getOneByGeneralInformationId);
exports.default = router;
