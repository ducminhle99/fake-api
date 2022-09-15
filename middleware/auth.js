const jwt = require("jsonwebtoken");

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) throw "no token provided";

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) throw "Unauthorized";
    req.email = decoded.email;
    next();
  });
};

const authJwt = {
  verifyToken: verifyToken,
};
module.exports = authJwt;
