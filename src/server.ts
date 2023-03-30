import config from "config";
import cors from "cors";
import express, { Application } from "express";
import mongoose, { ConnectOptions } from "mongoose";
import { errorConverter, errorHandler } from "./errors";
import { responseHandler } from "./helpers/responseHandler";
import GenarelInformationRouter from "./modules/genaral_information/genarel_information_router";
import InterculturalOperationRouter from "./modules/intercultural_operation/intercultural_operation_router";
import IrrigationSourceRouter from "./modules/irrigation_source/irrigation_source_router";
import ProductionInformationrouter from "./modules/production_information/production_information_router";
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


server.use(errorConverter);
server.use(errorHandler);

const port: number = dbConfig.port;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


