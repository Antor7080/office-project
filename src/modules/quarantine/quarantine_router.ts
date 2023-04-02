import { Router } from "express";
import { addQuarantinePestDiseasesController, getOneByGeneralInformationId, getOneById } from "./quarantine_controller";
import quarantinePestDiseseControlValidator from "./quarantine_validator";
const router = Router();


router.post("/add", quarantinePestDiseseControlValidator, addQuarantinePestDiseasesController);

router.get("/get/:id", getOneById);
router.get("/get-by-general-information-id/:id", getOneByGeneralInformationId);

export default router;