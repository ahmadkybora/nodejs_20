const { routes: authRoutes } = require("@utils/general");
const { login, logout, register } = require("@app/controllers/auth/authController");
const { loginSchemaValidation, registerSchemaValidation } = require("@app/requestValidations/authValidation/schemaValidation");
const { loginModelValidation, registerModelValidation} = require("@app/requestValidations/authValidation/modelValidation")

authRoutes.post("/login", loginSchemaValidation, loginModelValidation, login);
authRoutes.post("/register", registerSchemaValidation, registerModelValidation, register);
authRoutes.get("/logout", logout);

module.exports = authRoutes;
