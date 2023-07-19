const yup = require("yup");
const validateRequest = require("@middlewares/validateRequest");

const loginSchemaValidation = async (req, res, next) => {

    const loginSchema = yup.object({
        body: yup.object({
            username: yup.string().required(req.t("required", { name: "username" })),
            password: yup.string().required(req.t("required", { name: "password" })),
        }),
    });

    await validateRequest(req, res, next, loginSchema);
}    

const registerSchemaValidation = async (req, res, next) => {

    const registerSchema = yup.object({
        body: yup.object({
            username: yup.string()
                .min(2, req.t("min", { name: "username", number: "2" }))
                .max(15, req.t("max", { name: "username", number: "15" }))
                .required(req.t("required", { name: "username" })),
            email: yup.string()
                .email()
                .required(req.t(req.t("required", { name: "email" }))),
            password: yup.string()
                .min(8, req.t("min", { name: "password", number: "8"}))
                .max(32, req.t("max", { name: "password", number: "32" }))
                .required(req.t("required", { name: "password" })),
            confirmPassword: yup.string()
                .oneOf([yup.ref("password"), null], "پسوردها یکسان نیستند")
        }),
    });

    await validateRequest(req, res, next, registerSchema);
};

module.exports = {
    loginSchemaValidation,
    registerSchemaValidation
}
