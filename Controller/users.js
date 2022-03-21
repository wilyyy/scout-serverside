const Users = require("../Model/users");

const SignUp = (req, res) => {
   const user = new Users();
   user.email = req.body.email;
   user.password = req.body.password;
   //tweak save later according to scout needs
   user.save((err, done) => {
      if (err) return res.status(500).send("Sign up Failed");
      res.status(201).send("Signed up succesfully");
   });
};

const Login = (req, res) => {};

module.exports = {
   SignUp,
   Login,
};
