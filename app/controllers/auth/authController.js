const jwt = require("jsonwebtoken");
const { filterCol, respMsg } = require("@utils/general");
const { User, Token } = require("@app/models");

const generateAccessToken = (username) => {
    const { ACCESS_TOKEN_SECRET, ACCESS_TOKEN_LIFE } = process.env;
    return jwt.sign({ username: username }, ACCESS_TOKEN_SECRET, {
        algorithm: "HS256",
        expiresIn: "2h"
    });
}

const login = async (req, res, next) => {

    const { username } = req.body;

    const users = JSON.parse(JSON.stringify(await User.findAll()));

    const user = JSON.parse(JSON.stringify(await User.findOne({ where: { username } })));
    const accessToken = generateAccessToken(username);
    user.token = accessToken;

    return respMsg(res, 200, req.t("success"), filterCol(user, "password", "createdAt", "updatedAt"));

    // console.log(userCheck);

    // // const user = userCheck.toJSON();

    // await User.findOne({ where: { username } })
    //     .then((result) => {
    //         // const userWithToken = [];
    //         const user = result.toJSON();
    //         const accessToken = generateAccessToken(username);
    //         user.token = accessToken;

    //         console.log(user);

    //         return respMsg(res, 200, req.t("success"), user, "password");

            // const user = Object.entries(result.toJSON());



            // const l = user.push(accessToken)
            // console.log(result.toJSON());
            // const accessToken = generateAccessToken(username);

            // userWithToken.push(accessToken, user);
            // console.log(userWithToken);
            // return respMsg(res, 200, req.t("success"), userWithToken);
            // console.log(user)
        // });

    // const user = await User.findOne({ where: { username } });
    // user = JSON.parse(JSON.stringify(user));
    // // user.toJSON();
    // console.log(user);
    // const accessToken = generateAccessToken(username);
    // user.push(accessToken);
    // console.log(user);

    // console.log(JSON.parse(user));
    // console.log(JSON.stringify(user));
    // console.log(JSON.parse(JSON.stringify(user)));
    // // console.log(user);

    // JSON.parse(JSON.stringify(user)).push(accessToken);
    // console.log(user);
    // return respMsg(res, 200, req.t("success"), filterCol(user, ["password"]));

    // console.log(userCheck.id);

    // const payload = {username: username, id: userCheck.id}

    // const accessToken = jwt.sign({username: username}, ACCESS_TOKEN_SECRET, {
    //     algorithm: "HS256",
    //     expiresIn: ACCESS_TOKEN_LIFE
    // });

    // await Token.create({ userId: userCheck.id, token: accessToken });
    // const user = await User.findOne({ 
    //     include: {
    //         model: Token,
    //         attributes: ['token'],
    //     },
    //     where: { username } 
    // });






    // const user = filterCol(userWithToken, ["password"]);

    // console.log(userCheck);


        // jwt.sign({
    //     data: 'foobar'
    //   }, 'secret', { expiresIn: '1h' });

// console.log(username);
    // const token = Token.create({ id: userCheck.id, token: accessToken });

    // const user = filterCol(userCheck, ["password"]);
    // return respMsg(res, 200, req.t("success"), user);

    // const a = req.body.user.toJSON();
    // delete a['password'];
    // delete a['createdAt'];
    // delete a['updatedAt'];
    // console.log(a);  

    // const i = filterCol(req.body.user);
    // console.log(i);
    // const { userCheck } = req.body.user;

    // console.log(req.body.user);
}

const register = (req, res, next) => {}

const logout = async (req, res, next) => {
    if(!req.headers['authorization']) return respMsg(res, 401, req.t("no"));

    const user = jwt.decode(req.headers['authorization'].split(' ')[1]);

    const userCheck = await User.findOne({ where: { username: user.username } });
    const revokeToken = await Token.destroy({ where: { userId: userCheck.id } });

    if(revokeToken) return respMsg(res, 200, req.t("success"));
}

module.exports = {
    login,
    register,
    logout
}