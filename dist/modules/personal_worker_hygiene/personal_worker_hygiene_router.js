"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const personal_worker_hygiene_controller_1 = require("./personal_worker_hygiene_controller");
const personal_worker_hygiene_validator_1 = __importDefault(require("./personal_worker_hygiene_validator"));
const router = (0, express_1.default)();
router.post('/add', personal_worker_hygiene_validator_1.default, personal_worker_hygiene_controller_1.addPersonalWorkerHygieneController);
router.get('/get-by-general-info-id/:generalInformationID', personal_worker_hygiene_controller_1.getInfoByGeneralInfoId);
router.get('/get/:id', personal_worker_hygiene_controller_1.getInfoById);
exports.default = router;
