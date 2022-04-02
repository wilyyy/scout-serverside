const Users = require("../Model/users");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const SignUp = (req, res) => {
   const user = new Users();
   user.email = req.body.email;
   user.name = req.body.name;
   user.password = req.body.password;
   //tweak save later according to scout needs
   user.save((err, done) => {
      if (err) return res.status(500).send("Sign up Failed");
      res.status(201).send("Signed up succesfully");
   });
};

const Login = (req, res) => {
   Users.findOne({ email: req.body.email }, (err, users) => {
      if (err || !users) return res.status(500).send("Login failed");

      if (users.comparePassword(req.body.password)) {
         const token = jwt.sign({ id: users._id }, "thisismysecret");
         res.send(token);
      } else {
         res.send("could not log in");
      }
   });
};

module.exports = {
   SignUp,
   Login,
};


