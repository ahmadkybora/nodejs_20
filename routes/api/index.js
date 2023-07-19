const { app } = require("@utils/general");

app.use("/api/auth", require("@routes/api/authRoutes"));

app.use("/api/panel", require("@routes/api/panelRoutes/dashboardRoutes"));
