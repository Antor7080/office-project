import { Router } from "express";
import { addInterculturalOperation, getInterculturalOperation } from "./intercultural_operation_controller";
const router: Router = Router();
import interculturalOperationValidator from "./intercultural_operation_validator";
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

router.post("/add", addInterculturalOperation);

/* * @route   GET api/intercultural-operation/get/:id
    * @desc    Get Intercultural Operation Information
    * @access  Public
    * @params    {id}
    * @return  {success, message, data}
    * @error   {success, message, error}
    * * @example http://localhost:5000/api/intercultural-operation/get/5f9e1b0b0b1b1b1b1b1b1b1b * */

router.get("/get/:id", getInterculturalOperation);

export default router;