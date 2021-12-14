const bcrypt = require("bcrypt");
const User = require("../user/userModel");

exports.hashPassword = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 8);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Unsuccessfull, please try again" });
  }
}

exports.checkPassword = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    const match = await bcrypt.compare(req.body.password, user.password);
    if (match) {
      res.status(200).send({ message: "Successfully logged in" });
    } else {
      res.status(401).send({ message: "Error in email or password" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Unsuccessfull, please try again" });
  }
}