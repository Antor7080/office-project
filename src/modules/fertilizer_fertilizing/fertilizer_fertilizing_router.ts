import { Router } from "express";
import { addFertilizerFertilizing, getFertilizerFertilizing, getFertilizerFertilizingByGeneralInformationID } from "./fertilizer_fertilizing_controller";
import FertilizerFertilizingValidator from "./fertilizer_fertilizing_validator";

const router = Router();

/* * @route   POST api/fertilizer-fertilizing/add
    * @desc    Add Fertilizer Fertilizing
    * @access  Public
    * @body    {generalInformationID, landPreparationFertilizer, fertilizerNameQuantity, fertilizerNamePlant}
    * @return  {success, message, data}
    * @error   {success, message, error}
    * @example http://localhost:5000/api/fertilizer-fertilizing/add
    * */
router.post('/add', FertilizerFertilizingValidator, addFertilizerFertilizing);

/* * @route   GET api/fertilizer-fertilizing/get/:id
    * @desc    Get Fertilizer Fertilizing
    * @access  Public
    * @return  {success, message, data}
    * @error   {success, message, error}
    * @example http://localhost:5000/api/fertilizer-fertilizing/get/5f9f1b0b0b1b1b0b0b0b0b0b
    * */
router.get('/get/:id', getFertilizerFertilizing);

/* * @route   GET api/fertilizer-fertilizing/get-by-general-information-id/:id
    * @desc    Get Fertilizer Fertilizing By General Information ID
    * @access  Public
    * @return  {success, message, data}
    * @error   {success, message, error}
    * @example http://localhost:5000/api/fertilizer-fertilizing/get-by-general-information-id/5f9f1b0b0b1b1b0b0b0b0b0b
    * */
router.get('/get-by-general-information-id/:id', getFertilizerFertilizingByGeneralInformationID);

export default router;
