import config from "config";
import jsonwebtoken from "jsonwebtoken";

const accessTokenSecret = config.get<string>("farm.tokenConfig.accessTokenSecret");
const refreshTokenSecret = config.get<string>("farm.tokenConfig.refreshTokenSecret");
const accessTokenLife = config.get<string>("farm.tokenConfig.accessTokenLife");
const refreshTokenLife = config.get<string>("farm.tokenConfig.refreshTokenLife");



const generateAccessToken = function (id: string): string {

  return jsonwebtoken.sign({ id }, accessTokenSecret, {
    expiresIn: accessTokenLife,
  });
}

const generateRefreshToken = function (id: string): string {

  return jsonwebtoken.sign({ id }, refreshTokenSecret, {
    expiresIn: refreshTokenLife,
  });
};


const verifyAccessToken = function (token: string) {
  let decoded: any;
  try {
    decoded = jsonwebtoken.verify(token, accessTokenSecret);
    return decoded;

  } catch (err) {
    return false;
  }
}

const verifyRefreshToken = function (token: string) {
  let decoded: any;
  try {
    decoded = jsonwebtoken.verify(token, refreshTokenSecret);
    return decoded;
  } catch (error) {
    return false;
  }
}

let refreshTokensStore: string[] = [];
export { generateAccessToken, generateRefreshToken, refreshTokensStore, verifyAccessToken, verifyRefreshToken };

