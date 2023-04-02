import { Router } from "express";
import { add, getOneById , getOneByGeneralInformationId} from "./management_packaging_controller";
import managementPackagingValidator from "./management_packaging_validator";

const router = Router();

router.post("/add", managementPackagingValidator, add);
router.get("/get/:id", getOneById);
router.get("/get-by-general-information-id/:id", getOneByGeneralInformationId);


export default router;