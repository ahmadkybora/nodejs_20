require("./authRoutes");

const { app } = require("@utils/general");

// app.use("/api/", () => {
//     console.log(1);
// })
app.use("/api/auth", require("@routes/authRoutes"));

app.use("/api/panel", require("@routes/panelRoutes/dashboardRoutes"));
