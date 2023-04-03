import config from "config";
import cors from "cors";
import express, { Application } from "express";
import mongoose, { ConnectOptions } from "mongoose";
import { errorConverter, errorHandler } from "./errors";
import { responseHandler } from "./helpers/responseHandler";
import CropsHarvestingRouter from "./modules/crops_hervesting/crops_hervesting_router";
import FarmersExpensesIncomeRouter from "./modules/farmers_expenses_income/farmers_expenses_income_router";
import FertilizerFertilizingRouter from "./modules/fertilizer_fertilizing/fertilizer_fertilizing_router";
import GenarelInformationRouter from "./modules/genaral_information/genarel_information_router";
import InterculturalOperationRouter from "./modules/intercultural_operation/intercultural_operation_router";
import IrrigationSourceRouter from "./modules/irrigation_source/irrigation_source_router";
import ManagementPackagingRouter from "./modules/management_packaging/management_packaging_router";
import PersonalWorkerHygieneRouter from "./modules/personal_worker_hygiene/personal_worker_hygiene_router";
import ProductionInformationrouter from "./modules/production_information/production_information_router";
import QuarantinePestDiseasesRouter from "./modules/quarantine/quarantine_router";
const server: Application = express();
server.use(cors());
server.use(express.json());

interface IConfig {
    host: string;
    port: number;
    connectionString: string;

}
const dbConfig: IConfig = config.get('farm.dbConfig');
mongoose.connect(dbConfig.connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
} as ConnectOptions).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error(err);
});
server.use(responseHandler);

server.use('/api/genarel-information', GenarelInformationRouter);
server.use('/api/production-information', ProductionInformationrouter);
server.use('/api/irrigation-source', IrrigationSourceRouter);
server.use('/api/intercultural-operation', InterculturalOperationRouter);
server.use('/api/fertilizer-fertilizing', FertilizerFertilizingRouter);
server.use('/api/quarantine-pests-diseases', QuarantinePestDiseasesRouter);
server.use('/api/crops-harvesting', CropsHarvestingRouter);
server.use('/api/management-packaging', ManagementPackagingRouter);
server.use('/api/personal-worker-hygiene', PersonalWorkerHygieneRouter);
server.use('/api/farmers-expenses-income', FarmersExpensesIncomeRouter);


server.use(errorConverter);
server.use(errorHandler);

const port: number = dbConfig.port;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


