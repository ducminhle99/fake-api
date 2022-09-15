const authService = require("../services/auth");

exports.register = (req, res, next) => {
  authService
    .register(req.body)
    .then((message) => {
      res.status(200).json({
        code: 200,
        message: message,
      });
    })
    .catch(next);
};
exports.login = (req, res, next) => {
  authService
    .login(req.body)
    .then((accRes) => {
      res.status(200).json({
        code: 200,
        message: "ok",
        data: accRes,
      });
    })
    .catch(next);
};
