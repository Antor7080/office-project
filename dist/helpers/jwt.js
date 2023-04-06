"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyRefreshToken = exports.verifyAccessToken = exports.refreshTokensStore = exports.generateRefreshToken = exports.generateAccessToken = void 0;
const config_1 = __importDefault(require("config"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const accessTokenSecret = config_1.default.get("farm.tokenConfig.accessTokenSecret");
const refreshTokenSecret = config_1.default.get("farm.tokenConfig.refreshTokenSecret");
const accessTokenLife = config_1.default.get("farm.tokenConfig.accessTokenLife");
const refreshTokenLife = config_1.default.get("farm.tokenConfig.refreshTokenLife");
const generateAccessToken = function (id) {
    return jsonwebtoken_1.default.sign({ id }, accessTokenSecret, {
        expiresIn: accessTokenLife,
    });
};
exports.generateAccessToken = generateAccessToken;
const generateRefreshToken = function (id) {
    return jsonwebtoken_1.default.sign({ id }, refreshTokenSecret, {
        expiresIn: refreshTokenLife,
    });
};
exports.generateRefreshToken = generateRefreshToken;
const verifyAccessToken = function (token) {
    let decoded;
    try {
        decoded = jsonwebtoken_1.default.verify(token, accessTokenSecret);
        return decoded;
    }
    catch (err) {
        return false;
    }
};
exports.verifyAccessToken = verifyAccessToken;
const verifyRefreshToken = function (token) {
    let decoded;
    try {
        decoded = jsonwebtoken_1.default.verify(token, refreshTokenSecret);
        return decoded;
    }
    catch (error) {
        return false;
    }
};
exports.verifyRefreshToken = verifyRefreshToken;
let refreshTokensStore = [];
exports.refreshTokensStore = refreshTokensStore;
