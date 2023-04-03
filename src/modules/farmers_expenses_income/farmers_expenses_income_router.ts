import { Router } from 'express'
import { addFarmersExpensesIncomeController, getInfoByGeneralInfoId, getInfoById } from './farmers_expenses_income_controller'
import addFarmersExpensesIncomeValidator from './farmers_expenses_income_validator'
const router = Router()

router.post('/add', addFarmersExpensesIncomeValidator, addFarmersExpensesIncomeController)
router.get('/get-by-general-info-id/:generalInformationID', getInfoByGeneralInfoId)
router.get('/get/:_id', getInfoById)

export default router
