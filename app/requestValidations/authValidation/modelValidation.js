const { User }  = require("@app/models");
const bcrypt = require("bcrypt");
const { respMsg } = require("@utils/general");

const loginModelValidation = async (req, res, next) => {

    const { username, password } = req.body;

    const userCheck = await User.findOne({ where: { username } });

    if(!userCheck) return respMsg(res, 422, req.t("notFound", { name: "username" }));

    const passwordCheck = await bcrypt.compare(password, userCheck.password);
    if(!passwordCheck) return respMsg(res, 422, req.t("notFound", { name: "username" }));

    next();
}

const registerModelValidation = async (req, res, next) => {
    const { username, email } = req.body;

    const usernameCheck = await User.findOne({ username });
    if(usernameCheck) return respMsg(res, 422, req.t("isExists", { name: "username" }));

    const emailCheck = await User.findOne({ email });
    if(emailCheck) return respMsg(res, 422, req.t("isExists", { name: "email" }));

    next();
}

module.exports = {
    registerModelValidation,
    loginModelValidation
}
