import bcrypt from "bcrypt";
import { NextFunction, Request, Response } from "express";
import { ApiError } from "../../errors";
import { generateAccessToken, generateRefreshToken, refreshTokensStore, verifyRefreshToken } from "../../helpers/jwt";
import {
  credentialsNotMatch,
  notAccepted,
  unAuthorized,
  unProcessable
} from "../../helpers/responseHandler";
import { IUser } from "../user/user_interface";
import { resTransformer } from "../user/user_res_transformar";
import { getUser, updateById } from "../user/user_service";



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
const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { phone, password }: IUser = req.body;
    if (!phone || !password) {
      throw new ApiError(unProcessable(), "Phone No or Password is Missing");
    }

    const user = await getUser({
      phone: phone,
    });

    if (!user) {
      throw new ApiError(unAuthorized(), credentialsNotMatch());
    }

    if (!user.password) {
      throw new ApiError(unAuthorized(), credentialsNotMatch());
    }

    if (!bcrypt.compareSync(password, user.password)) {
      throw new ApiError(unAuthorized(), credentialsNotMatch());
    }

    if (user.status !== "Active") {
      throw new ApiError(unAuthorized(), "User is not active");
    }

    const accessToken: string = generateAccessToken(user._id as string);
    const refreshToken: string = generateRefreshToken(user._id as string);
    const userResTransform: IUser = resTransformer(user);
    const result = {
      accessToken,
      refreshToken,
      user: userResTransform
    }
    //store refresh token
    refreshTokensStore.push(refreshToken);
    res.ok(result, "Login Successfull");

  } catch (error) {
    next(error);
  }
};

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

const logout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const refreshToken = req.body.token;
    if (refreshToken == null) throw new ApiError(unAuthorized(), "Unautorized User");
    refreshTokensStore.map(token => {
      if (token === refreshToken) {
        const index = refreshTokensStore.indexOf(token);
        refreshTokensStore.splice(index, 1);
      }
    });
    console.log(refreshTokensStore);
    res.ok({}, "Logout Successfull");
  } catch (error) {
    next(error);
  }
}

/**
 * @objective user password change
 * @endpoint /api/customer/change-password
 * @mehtod Post
 * @reqbody {"old_password":"Your new password", "new_password":"new password"}
 * @res { success: true,
         "code": 200,  phone: " phone number", message: "Password Changed Successfully" }
 */

const changePassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authUser = res.locals?.user;

    const { _id, password } = authUser;

    if (!req.body.new_password || !req.body.old_password) {
      throw new ApiError(unProcessable(), "Password or Phone Missing");
    }

    if (!bcrypt.compareSync(req.body.old_password, password)) {
      throw new ApiError(unAuthorized(), "Unautorized Customer");
    }

    if (bcrypt.compareSync(req.body.new_password, password)) {
      throw new ApiError(
        unProcessable(),
        "New Password cannot be the same as Old Password"
      );
    }

    req.body.password = bcrypt.hashSync(<string>req.body.new_password, 10);
    const result = await updateById(_id, req.body);

    return res.ok({ phone: result?.phone }, "Password Changed Successfully");
  } catch (error) {
    next(error);
  }
};


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
const generateNewAccessToken = async (req: Request, res: Response, next: NextFunction) => {
  const _refreshToken = req.body.token;
  try {
    if (!_refreshToken) {
      throw new ApiError(notAccepted(), "Token is missing");
    };
    if (!refreshTokensStore.includes(_refreshToken)) {
      throw new ApiError(notAccepted(), "Token is not valid");
    }
    const decode = await verifyRefreshToken(_refreshToken);
    if (!decode) {
      throw new ApiError(notAccepted(), "Token is not valid");
    };
    const accessToken = generateAccessToken(decode.id);
    res.ok({ accessToken }, "Access Token Generated");

  } catch (error) {
    next(error);
  }
}

export {
  changePassword, generateNewAccessToken, login,
  logout
};

