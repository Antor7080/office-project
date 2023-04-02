import { Router } from "express";
import { addCropsHarvestingController, getOneByGeneralInformationId, getOneById } from "./crops_hervesting_controller";
import { cropsHarvestingValidator } from "./crops_hervesting_validator";
const router = Router();

router.post("/add", cropsHarvestingValidator, addCropsHarvestingController);

router.get("/get/:id", getOneById);
router.get("/get-by-general-information-id/:id", getOneByGeneralInformationId);

export default router;