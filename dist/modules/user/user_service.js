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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateById = exports.getAllUser = exports.getUser = exports.createUser = void 0;
const user_model_1 = __importDefault(require("./user_model"));
/**
 * @objective add new user
 * @param user
 * @returns
 */
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = new user_model_1.default(user);
    return yield newUser.save();
});
exports.createUser = createUser;
/**
 * @objective get one user
 * @param info
 * @returns
 */
const getUser = (info) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.default.findOne(info);
});
exports.getUser = getUser;
/**
 * @objective get all user
 * @returns
 */
const getAllUser = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.default.find();
});
exports.getAllUser = getAllUser;
/**
 *
 * @param _id
 * @param updateBody
 * @param auditTrails
 * @returns
 */
const updateById = (_id, updateBody) => __awaiter(void 0, void 0, void 0, function* () {
    return user_model_1.default.findByIdAndUpdate(_id, {
        $set: Object.assign({}, updateBody),
    }, { new: true });
});
exports.updateById = updateById;
