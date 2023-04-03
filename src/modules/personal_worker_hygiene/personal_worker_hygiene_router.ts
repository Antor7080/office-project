import Router from 'express';
import { addPersonalWorkerHygieneController, getInfoByGeneralInfoId, getInfoById } from './personal_worker_hygiene_controller';
import personalWorkerHygieneValidator  from './personal_worker_hygiene_validator';
const router = Router();

router.post('/add', personalWorkerHygieneValidator, addPersonalWorkerHygieneController);
router.get('/get-by-general-info-id/:generalInformationID', getInfoByGeneralInfoId);
router.get('/get/:id', getInfoById);

export default router;