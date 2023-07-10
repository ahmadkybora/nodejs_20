const { respMsg } = require("@utils/general");

const validateRequest = (schema) => async (req, res, next) => {
    await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      }, { abortEarly: false })
      .then(() => {
        return next();
      })
      .catch((err) => {
        return respMsg(res, 422, err.errors);
    });
};

module.exports = validateRequest;
