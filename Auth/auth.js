const jwt = require("jsonwebtoken");

const AuthorizeUser = (req, res, next) => {
   jwt.verify(req.query.token, "thisismysecret", (err, data) => {
      if (err) return res.send("not authorized");

      req.users = data;
      next();
   });
};

module.exports = AuthorizeUser;
