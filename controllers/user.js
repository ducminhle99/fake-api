const userService = require("../services/user");

exports.getList = (req, res, next) => {
  userService
    .getList()
    .then((list) => {
      res.status(200).json({
        code: 200,
        message: "ok",
        data: {
          total: list.length,
          list: list,
        },
      });
    })
    .catch(next);
};
