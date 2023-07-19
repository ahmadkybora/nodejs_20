const { app, express, path } = require("@utils/general");
const bodyParser = require("body-parser");
const logger = require('morgan');

const { NODE_ENV } = process.env;

app.use(express.static(path.join("public")));
app.use(express.static(path.join("node_modules/bootstrap/dist")));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

if (NODE_ENV !== "production") {
    app.use(logger("dev"));
}

