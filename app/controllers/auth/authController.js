const yup = require("yup");
const { renderMsg, filterCol } = require("@utils/general");
const { User }  = require("@app/models");
const bcrypt = require("bcrypt");

const getLogin = (req, res, next) => {
  const payload = { page: "auth/login", pageTitle: "login", path: "login" };
  return renderMsg(res, payload);
}

const login = async (req, res, next) => {

  const loginSchemaValidation = yup.object({
    body: yup.object({
      username: yup.string().required(req.t("required", { name: "username" })),
      password: yup.string().required(req.t("required", { name: "password" })),
    }),
  });

  const payload = { 
    page: "auth/login", 
    pageTitle: "login", 
    path: "login", 
  };
  await validateRequest(req, res, next, loginSchemaValidation, payload);
}

const validateRequest = async (req, res, next, schema, {...otherInfo}) => {
  const { page, pageTitle, path } = otherInfo;

  await schema.validate({
      body: req.body,
      query: req.query,
      params: req.params,
    }, { abortEarly: false })
    .then(() => {
      return loginModelValidation(req, res, next, page, pageTitle, path);
    })
    .catch((err) => {
      let errors = [];
      err.errors.forEach((val) => {
      errors.push({
        message: val
        });
      });
      return renderMsg(res, { page, pageTitle, path, errors });
  });
};

const loginModelValidation = async (req, res, next, page, pageTitle, path) => {

  const { username, password } = req.body;

  const userCheck = await User.findOne({ where: { username } });
  if(!userCheck) {
    let errors = [];
    errors.push({
      message: req.t("notFound", { name: "username" })
    });
    return renderMsg(res, page, pageTitle, path, errors);
  }

  const passwordCheck = await bcrypt.compare(password, userCheck.password);
  if(!passwordCheck) {
    let errors = [];
    errors.push({
      message: req.t("notFound", { name: "username" })
    });
    return renderMsg(res, { page, pageTitle, path, errors });
  }

  let errors = [];
  errors.push({
    message: req.t("success")
  });

  const filter = filterCol(userCheck.toJSON(), "password");

  return renderMsg(res, { page, pageTitle, path, errors, filter })

}

module.exports = {
    getLogin,
    login
}
