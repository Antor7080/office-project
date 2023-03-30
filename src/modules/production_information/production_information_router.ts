import { Router } from "express";
import { addProductionInformation, getProductionInformation } from "./production_information_controller";
import productionInformationValidator from "./production_information_validator";


const router = Router();
/*
    * @route   POST api/production-information/add
    * @desc    Add Production Information
    * @access  Public
    * @body    {generalInformationID, productionInformation}
    * @return  {success, message, data}
    * @error   {success, message, error}
    * @example http://localhost:5000/api/production-information/add
    * */
router.post('/add', productionInformationValidator, addProductionInformation);


/*
    * @route   GET api/production-information/get-production-information/:id
    * @desc    Get Production Information
    * @access  Public
    * @body    {id}
    * @return  {success, message, data}
    * @error   {success, message, error}
    * @example http://localhost:5000/api/production-information/get-production-information/5f9e1b0b0b1b1b1b1b1b1b1b
    * */
router.get("/get-production-information/:id", getProductionInformation)

export default router;

