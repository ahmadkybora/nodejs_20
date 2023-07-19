const { routes: dashboardRoutes } = require("@utils/general");
const authenticate = require("@middlewares/authenticate");
const dashboard = require("@app/controllers/api/panel/dashboardController");

dashboardRoutes.get("/", /*authenticate,*/ dashboard);

module.exports = dashboardRoutes;
