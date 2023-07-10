const jwt = require("jsonwebtoken");
const { User, Token } = require("@app/models");
const { respMsg } = require("@utils/general");

module.exports = async (req, res, next) => {
    if (req.headers['authorization'] === null) return respMsg(res, 401, req.t("unauthenticated"));
    // const user = jwt.decode(req.headers['authorization'].split(' ')[1]);
    const token = req.headers['authorization'].split(' ')[1];
    
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, userCheck) => {
        if(err) return respMsg(res, 403, req.t("unauthorized"));
        req.user = userCheck
        next();
    });

    // const userCheck = await User.findOne({ where: { username: user.username } });
    // const tokenCheck = await Token.findOne({ where: { userId: userCheck.id } });

    // // console.log(tokenCheck);
    // if(tokenCheck === null) return respMsg(res, 401, req.t("unauthenticated"));

    // const verifyToken = jwt.verify()
    // const verifyToken = jwt.verify(user, process.env.ACCESS_TOKEN_SECRET);
    // console.log(verifyToken);


}
