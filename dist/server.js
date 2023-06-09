"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const errors_1 = require("./errors");
const responseHandler_1 = require("./helpers/responseHandler");
const crops_hervesting_router_1 = __importDefault(require("./modules/crops_hervesting/crops_hervesting_router"));
const farmers_expenses_income_router_1 = __importDefault(require("./modules/farmers_expenses_income/farmers_expenses_income_router"));
const fertilizer_fertilizing_router_1 = __importDefault(require("./modules/fertilizer_fertilizing/fertilizer_fertilizing_router"));
const genarel_information_router_1 = __importDefault(require("./modules/genaral_information/genarel_information_router"));
const intercultural_operation_router_1 = __importDefault(require("./modules/intercultural_operation/intercultural_operation_router"));
const irrigation_source_router_1 = __importDefault(require("./modules/irrigation_source/irrigation_source_router"));
const management_packaging_router_1 = __importDefault(require("./modules/management_packaging/management_packaging_router"));
const personal_worker_hygiene_router_1 = __importDefault(require("./modules/personal_worker_hygiene/personal_worker_hygiene_router"));
const production_information_router_1 = __importDefault(require("./modules/production_information/production_information_router"));
const quarantine_router_1 = __importDefault(require("./modules/quarantine/quarantine_router"));
const user_router_1 = __importDefault(require("./modules/user/user_router"));
const auth_router_1 = __importDefault(require("./modules/auth/auth_router"));
const server = (0, express_1.default)();
server.use((0, cors_1.default)());
server.use(express_1.default.json());
const dbConfig = config_1.default.get('farm.dbConfig');
mongoose_1.default.connect(dbConfig.connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error(err);
});
server.use(responseHandler_1.responseHandler);
server.use('/api/genarel-information', genarel_information_router_1.default);
server.use('/api/production-information', production_information_router_1.default);
server.use('/api/irrigation-source', irrigation_source_router_1.default);
server.use('/api/intercultural-operation', intercultural_operation_router_1.default);
server.use('/api/fertilizer-fertilizing', fertilizer_fertilizing_router_1.default);
server.use('/api/quarantine-pests-diseases', quarantine_router_1.default);
server.use('/api/crops-harvesting', crops_hervesting_router_1.default);
server.use('/api/management-packaging', management_packaging_router_1.default);
server.use('/api/personal-worker-hygiene', personal_worker_hygiene_router_1.default);
server.use('/api/farmers-expenses-income', farmers_expenses_income_router_1.default);
server.use('/api/user', user_router_1.default);
server.use('/api/auth', auth_router_1.default);
server.use(errors_1.errorConverter);
server.use(errors_1.errorHandler);
server.get('/', (req, res) => {
    res.ok('Hello World!');
});
const port = dbConfig.port;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
