import { Router } from "express";
import { addIrrigationSourceInfo, getIrrigationSourceInfo } from "./irrigation_source_controller";
import irrigationSourceValidator from "./irrigation_source_validator";
const router: Router = Router();

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

router.post("/add", irrigationSourceValidator, addIrrigationSourceInfo);

/* * @route   GET api/irrigation-source/get/:id 
    * @desc    Get Irrigation Source Information 
    * @access  Public 
    * @params    {id}
    * @return  {success, message, data} 
    * @error   {success, message, error} 
    * * @example http://localhost:5000/api/irrigation-source/get/5f9e1b0b0b1b1b1b1b1b1b1b * */

router.get("/get/:id", getIrrigationSourceInfo);
export default router;
