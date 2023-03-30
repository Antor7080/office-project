"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const intercultural_operation_controller_1 = require("./intercultural_operation_controller");
const router = (0, express_1.Router)();
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
router.post("/add", intercultural_operation_controller_1.addInterculturalOperation);
/* * @route   GET api/intercultural-operation/get/:id
    * @desc    Get Intercultural Operation Information
    * @access  Public
    * @params    {id}
    * @return  {success, message, data}
    * @error   {success, message, error}
    * * @example http://localhost:5000/api/intercultural-operation/get/5f9e1b0b0b1b1b1b1b1b1b1b * */
router.get("/get/:id", intercultural_operation_controller_1.getInterculturalOperation);
exports.default = router;
