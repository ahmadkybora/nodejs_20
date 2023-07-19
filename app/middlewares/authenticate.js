const jwt = require("jsonwebtoken");
const { respMsg } = require("@utils/general");
const { Token } = require("@app/models");
const { Op } = require("sequelize");

module.exports = async (req, res, next) => {
    if (req.headers["authorization"] === null) return respMsg(res, 401, req.t("unauthenticated"));

    const authHeader = req.headers["authorization"];
    const token = authHeader.split(" ")[1];
    const userId = jwt.decode(token)["userId"];

    const accessToken = JSON.parse(JSON.stringify(await Token.findOne({ 
        where: { 
            [Op.and]: [
                {token},
                {userId}
            ]
        } 
    })));

    if(!accessToken) return respMsg(res, 403, req.t("unauthorized"));

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, result) => {
        if(err) return respMsg(res, 403, req.t("unauthorized"));
        req.body.user = result.username;
        next();
    });
}
