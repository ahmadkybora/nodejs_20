const { routes: dashboardRoutes } = require("@utils/general");
const authenticate = require("@middlewares/authenticate");

dashboardRoutes.get("/", authenticate, () => {
    console.log(1)
});

module.exports = dashboardRoutes;
