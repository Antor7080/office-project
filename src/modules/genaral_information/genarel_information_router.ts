import { Router } from "express";
import { addGeneralInformation, getGeneralInformation, getGeneralInformationById } from "./genarel_information_controller";
import genarelInformationValidator from "./genarel_information_validator";
const router = Router();

/** 
    * @route   POST api/general-information/add
    * @desc    Add General Information
    * @access  Public
    * @body    {generalInformation}
    * @return  {success, message, data}
    * @error   {success, message, error}
    * @example http://localhost:5000/api/general-information/add
    * */
router.post('/add',/*  authorization(["Farmer", "Admin"]), */ genarelInformationValidator, addGeneralInformation);


/*
    * @route   GET api/general-information/get
    * @desc    Get General Information
    * @access  Public
    * @return  {success, message, data}
    * @error   {success, message, error}
    * * @example http://localhost:5000/api/general-information/get * */

router.get('/', getGeneralInformation);

/* * @route   GET api/general-information/get/:id
    * @desc    Get General Information By Id
    * @access  Public
    * @params    {id}
    * @return  {success, message, data}
    * @error   {success, message, error}
    * * @example http://localhost:5000/api/general-information/get/5f9e1b0b0b1b1b1b1b1b1b1b * */

router.get('/:id', getGeneralInformationById);



export default router;