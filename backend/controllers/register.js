const User = require("../models/admin");
const bcrypt = require("bcrypt");





const Register = (req, res) => {
    const { email, password } = req.body;
    if ( !email || !password ) {
      return res.status(400).json({
        message: "Please fill all the fields",
      });
    }
    User.findOne({ email }).then((savedUser) => {
      if (savedUser) {
        return res.status(400).json({ message: "User already exists" });
      }
      bcrypt.hash(password, 10).then((hash) => {
        const user = new User({
          email,
          password: hash
        });
        user
          .save()
          .then((user) => {
            res.status(200).json({
              message: "User saved successfully",
              user,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      });
    });
  };

  module.exports = Register;