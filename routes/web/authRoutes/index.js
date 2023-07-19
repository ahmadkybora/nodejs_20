const { routes: authRoutes } = require("@utils/general");
const { login, getLogin } = require("@app/controllers/auth/authController");

authRoutes.get("/login", getLogin)
authRoutes.post("/login", login);

module.exports = authRoutes;
