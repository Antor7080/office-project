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
exports.logout = exports.login = exports.generateNewAccessToken = exports.changePassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const errors_1 = require("../../errors");
const jwt_1 = require("../../helpers/jwt");
const responseHandler_1 = require("../../helpers/responseHandler");
const user_res_transformar_1 = require("../user/user_res_transformar");
const user_service_1 = require("../user/user_service");
/**
 *
 * @objective login
 * @endpoint /api/auth/login
 * @mehtod Post
 * @reqbody {
 *  phone: "01XXXXXXXXX",
 * "password":"xxxxxx"
 *  }
 * @res {
    "success": true,
    "code": 200,
    "data": {
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWJkdXIgUmFoaW0iLCJwaG9uZSI6IjAxOTg2Mjk3MDgwIiwicm9sZSI6IkFkbWluIiwiaWQiOiI2NDJiZTJlMzMyN2U0ZDdmMzU2OWIxOTUiLCJpYXQiOjE2ODA2NzU2NTAsImV4cCI6MTY4MDY3OTI1MH0.6vIxZxrYL9BcJo3lAX2eml8SzfTm_YrC5EdA74FO4vA",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWJkdXIgUmFoaW0iLCJwaG9uZSI6IjAxOTg2Mjk3MDgwIiwicm9sZSI6IkFkbWluIiwiaWQiOiI2NDJiZTJlMzMyN2U0ZDdmMzU2OWIxOTUiLCJpYXQiOjE2ODA2NzU2NTAsImV4cCI6MTcxMjIzMzI1MH0.1FBiu2AHet_nnKDXfUfeeK1U2Z50eAMF6P8wHkYFiYk",
        "user": {
            "_id": "642be2e3327e4d7f3569b195",
            "phone": "01986297080",
            "name": "Abdur Rahim",
            "role": "Admin"
        }
    },
    "message": "Login Successfull"
}
 */
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { phone, password } = req.body;
        if (!phone || !password) {
            throw new errors_1.ApiError((0, responseHandler_1.unProcessable)(), "Phone No or Password is Missing");
        }
        const user = yield (0, user_service_1.getUser)({
            phone: phone,
        });
        if (!user) {
            throw new errors_1.ApiError((0, responseHandler_1.unAuthorized)(), (0, responseHandler_1.credentialsNotMatch)());
        }
        if (!user.password) {
            throw new errors_1.ApiError((0, responseHandler_1.unAuthorized)(), (0, responseHandler_1.credentialsNotMatch)());
        }
        if (!bcrypt_1.default.compareSync(password, user.password)) {
            throw new errors_1.ApiError((0, responseHandler_1.unAuthorized)(), (0, responseHandler_1.credentialsNotMatch)());
        }
        if (user.status !== "Active") {
            throw new errors_1.ApiError((0, responseHandler_1.unAuthorized)(), "User is not active");
        }
        const accessToken = (0, jwt_1.generateAccessToken)(user._id);
        const refreshToken = (0, jwt_1.generateRefreshToken)(user._id);
        const userResTransform = (0, user_res_transformar_1.resTransformer)(user);
        const result = {
            accessToken,
            refreshToken,
            user: userResTransform
        };
        //store refresh token
        jwt_1.refreshTokensStore.push(refreshToken);
        res.ok(result, "Login Successfull");
    }
    catch (error) {
        next(error);
    }
});
exports.login = login;
/**
* @objective logout
* @endpoint /api/auth/logout
* @mehtod Post
* @reqbody {
  token = "refresh token"

}
* @res {
    "success": true,
    "code": 200,
    "data": {},
    "message": "Logout Successfull"
}
*/
const logout = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const refreshToken = req.body.token;
        if (refreshToken == null)
            throw new errors_1.ApiError((0, responseHandler_1.unAuthorized)(), "Unautorized User");
        jwt_1.refreshTokensStore.map(token => {
            if (token === refreshToken) {
                const index = jwt_1.refreshTokensStore.indexOf(token);
                jwt_1.refreshTokensStore.splice(index, 1);
            }
        });
        console.log(jwt_1.refreshTokensStore);
        res.ok({}, "Logout Successfull");
    }
    catch (error) {
        next(error);
    }
});
exports.logout = logout;
/**
 * @objective user password change
 * @endpoint /api/customer/change-password
 * @mehtod Post
 * @reqbody {"old_password":"Your new password", "new_password":"new password"}
 * @res { success: true,
         "code": 200,  phone: " phone number", message: "Password Changed Successfully" }
 */
const changePassword = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const authUser = (_a = res.locals) === null || _a === void 0 ? void 0 : _a.user;
        const { _id, password } = authUser;
        if (!req.body.new_password || !req.body.old_password) {
            throw new errors_1.ApiError((0, responseHandler_1.unProcessable)(), "Password or Phone Missing");
        }
        if (!bcrypt_1.default.compareSync(req.body.old_password, password)) {
            throw new errors_1.ApiError((0, responseHandler_1.unAuthorized)(), "Unautorized Customer");
        }
        if (bcrypt_1.default.compareSync(req.body.new_password, password)) {
            throw new errors_1.ApiError((0, responseHandler_1.unProcessable)(), "New Password cannot be the same as Old Password");
        }
        req.body.password = bcrypt_1.default.hashSync(req.body.new_password, 10);
        const result = yield (0, user_service_1.updateById)(_id, req.body);
        return res.ok({ phone: result === null || result === void 0 ? void 0 : result.phone }, "Password Changed Successfully");
    }
    catch (error) {
        next(error);
    }
});
exports.changePassword = changePassword;
/**
 * @objective generate access token
 * @method Post
 * @reqbody {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmJlMmUzMzI3ZTRkN2YzNTY5YjE5NSIsImlhdCI6MTY4MDc2MDU2NiwiZXhwIjoxNzEyMzE4MTY2fQ.Qx-CYUjK4Bp2WTik3m7TTQWuctoxoM1Rh9PXsjAYk3w"
}
@res {
    "success": true,
    "code": 200,
    "data": {
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmJlMmUzMzI3ZTRkN2YzNTY5YjE5NSIsImlhdCI6MTY4MDc2MDU4NywiZXhwIjoxNjgwNzY0MTg3fQ.cbuikF9i2HCzG9TozWWCJUfW1q08kT-gnvKQQezB3FM"
    },
    "message": "Access Token Generated"
}
 *

*/
const generateNewAccessToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const _refreshToken = req.body.token;
    try {
        if (!_refreshToken) {
            throw new errors_1.ApiError((0, responseHandler_1.notAccepted)(), "Token is missing");
        }
        ;
        if (!jwt_1.refreshTokensStore.includes(_refreshToken)) {
            throw new errors_1.ApiError((0, responseHandler_1.notAccepted)(), "Token is not valid");
        }
        const decode = yield (0, jwt_1.verifyRefreshToken)(_refreshToken);
        if (!decode) {
            throw new errors_1.ApiError((0, responseHandler_1.notAccepted)(), "Token is not valid");
        }
        ;
        const accessToken = (0, jwt_1.generateAccessToken)(decode.id);
        res.ok({ accessToken }, "Access Token Generated");
    }
    catch (error) {
        next(error);
    }
});
exports.generateNewAccessToken = generateNewAccessToken;
