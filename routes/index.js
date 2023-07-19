// require("./api");

const { app } = require("@utils/general");

app.use("/auth", require("@routes/web/authRoutes"));
