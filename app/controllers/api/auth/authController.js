const jwt = require("jsonwebtoken");
const { filterCol, respMsg } = require("@utils/general");
const { User, Token } = require("@app/models");

const generateAccessToken = (payload) => {
    const { ACCESS_TOKEN_SECRET, ACCESS_TOKEN_LIFE } = process.env;
    return jwt.sign(payload, ACCESS_TOKEN_SECRET, {
        algorithm: "HS256",
        expiresIn: ACCESS_TOKEN_LIFE
    });
}

const login = async (req, res) => {

    const { username } = req.body;
    const user = JSON.parse(JSON.stringify(await User.findOne({ where: { username } })));
    const payload = { userId: user.id, username: user.username };
    const userId = payload.userId;
    const token = generateAccessToken(payload);

    const accessToken = await Token.create({ userId, token });
    user.token = JSON.parse(JSON.stringify(accessToken.token));

    return respMsg(res, 200, req.t("success"), filterCol(user, "password"));
}

const register = (req, res, next) => {}

const logout = async (req, res) => {
    const userCheck = await User.findOne({ where: { username: req.body.user } });
    const revokeToken = await Token.destroy({ where: { userId: userCheck.id } });

    if(revokeToken) return respMsg(res, 200, req.t("success"));
}

module.exports = {
    login,
    register,
    logout
}
