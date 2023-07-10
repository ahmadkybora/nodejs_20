require("./bootstrap/app");

const { app } = require("@utils/general");
const port = process.env.PORT || 3001;

app.listen(port, () => {
   console.log("---------------------");
   console.log(`Server started on port ${port}`);
   console.log("---------------------");
});
