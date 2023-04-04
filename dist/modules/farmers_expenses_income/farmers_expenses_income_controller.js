"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInfoById = exports.getInfoByGeneralInfoId = exports.addFarmersExpensesIncomeController = void 0;
const errors_1 = require("../../errors");
const responseHandler_1 = require("../../helpers/responseHandler");
const farmers_expenses_income_service_1 = require("./farmers_expenses_income_service");
/**
 * @objective Create Farmers Expenses Income
 * @endpoint /api/v1/farmers-expenses-income/add
 * @method POST
 * @reqBody {
    "generalInformationID": "6427fc064310a9504c8be92b",
    "leaseCost": 1000,
    "soilTestCost": 1000,
    "landPreparationCost": 500,
    "seedCost": 500,
    "fertilizerCost": 2000,
    "irrigationCost": 1000,
    "laborCost": 5000,
    "otherCost": 1000,
    "totalCost": 12000,
    "totalProduction": 100,
    "totalSale": 20000,
    "totalProfit": 8000
};
    * @Resbody {
    "success": true,
    "code": 201,
    "data": {
        "generalInformationID": "6427fc064310a9504c8be92b",
        "leaseCost": 1000,
        "soilTestCost": 1000,
        "landPreparationCost": 500,
        "seedCost": 500,
        "fertilizerCost": 2000,
        "irrigationCost": 1000,
        "laborCost": 5000,
        "otherCost": 1000,
        "totalCost": 12000,
        "totalProduction": 100,
        "totalSale": 20000,
        "totalProfit": 8000,
        "_id": "642ba5af008d8c1d8f18fcae",
        "createdAt": "2023-04-04T04:21:03.325Z",
        "updatedAt": "2023-04-04T04:21:03.325Z",
        "__v": 0
    },
    "message": "Farmers Expenses Income created successfully"
}
*/
const addFarmersExpensesIncomeController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const generalInformationID = req.body.generalInformationID;
        const isExist = yield (0, farmers_expenses_income_service_1.findOneQuary)({ generalInformationID });
        if (isExist) {
            throw new errors_1.ApiError((0, responseHandler_1.unProcessable)(), "Farmers Expenses Income already exist");
        }
        const newFarmersExpensesIncome = yield (0, farmers_expenses_income_service_1.addFarmersExpensesIncome)(req.body);
        res.created(newFarmersExpensesIncome, "Farmers Expenses Income created successfully");
    }
    catch (error) {
        next(error);
    }
});
exports.addFarmersExpensesIncomeController = addFarmersExpensesIncomeController;
/**
 *
 * @objective Get Farmers Expenses Income by generalInformationID
 * @endpoint /api/v1/farmers-expenses-income/get-by-general-info-id/:generalInformationID
 * @method GET
 * @param generalInformationID
 * @resBody {
    "success": true,
    "code": 200,
    "data": {
        "_id": "642ba5af008d8c1d8f18fcae",
        "generalInformationID": "6427fc064310a9504c8be92b",
        "leaseCost": 1000,
        "soilTestCost": 1000,
        "landPreparationCost": 500,
        "seedCost": 500,
        "fertilizerCost": 2000,
        "irrigationCost": 1000,
        "laborCost": 5000,
        "otherCost": 1000,
        "totalCost": 12000,
        "totalProduction": 100,
        "totalSale": 20000,
        "totalProfit": 8000,
        "createdAt": "2023-04-04T04:21:03.325Z",
        "updatedAt": "2023-04-04T04:21:03.325Z",
        "__v": 0
    },
    "message": "Farmers Expenses Income found successfully"
}
 */
const getInfoByGeneralInfoId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const generalInformationID = req.params.generalInformationID;
        const farmersExpensesIncome = yield (0, farmers_expenses_income_service_1.findOneQuary)({ generalInformationID });
        if (!farmersExpensesIncome) {
            throw new errors_1.ApiError((0, responseHandler_1.unProcessable)(), "Farmers Expenses Income not found");
        }
        res.ok(farmersExpensesIncome, "Farmers Expenses Income found successfully");
    }
    catch (error) {
        next(error);
    }
});
exports.getInfoByGeneralInfoId = getInfoByGeneralInfoId;
/**
 *
 * @objective Get Farmers Expenses Income by id
 * @endpoint /api/v1/farmers-expenses-income/get/:id
 * @method GET
 * @param id
 * @resBody {
    "success": true,
    "code": 200,
    "data": {
        "_id": "642ba5af008d8c1d8f18fcae",
        "generalInformationID": "6427fc064310a9504c8be92b",
        "leaseCost": 1000,
        "soilTestCost": 1000,
        "landPreparationCost": 500,
        "seedCost": 500,
        "fertilizerCost": 2000,
        "irrigationCost": 1000,
        "laborCost": 5000,
        "otherCost": 1000,
        "totalCost": 12000,
        "totalProduction": 100,
        "totalSale": 20000,
        "totalProfit": 8000,
        "createdAt": "2023-04-04T04:21:03.325Z",
        "updatedAt": "2023-04-04T04:21:03.325Z",
        "__v": 0
    },
    "message": "Farmers Expenses Income found successfully"
}
 */
const getInfoById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _id = req.params._id;
        const farmersExpensesIncome = yield (0, farmers_expenses_income_service_1.findOneQuary)({ _id });
        if (!farmersExpensesIncome) {
            throw new errors_1.ApiError((0, responseHandler_1.notFound)(), "Farmers Expenses Income not found");
        }
        res.ok(farmersExpensesIncome, "Farmers Expenses Income found successfully");
    }
    catch (error) {
        next(error);
    }
});
exports.getInfoById = getInfoById;
