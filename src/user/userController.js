const User = require("./userModel");

exports.addUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).send({ message: "Successfully added user", newUser });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Unsuccessful, please try again" });
  }
}

exports.listUsers = async (req, res) => {
  try {
    const list = await User.find({});
    const message = list.length === 0 ? "No items found." : `${list.length} items found.`;
    res.status(200).send({ message: message, list });
  } catch (error) {
    console.log(error);
  }
}

exports.updateUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.body._id, req.body);
    const user = await User.findById(req.body._id);
    res.status(200).send({ message: "Successfully updated user", user });
  } catch (error) {
    console.log(error);
  }
}

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.body._id);
    await User.deleteOne({ _id: req.body._id });
    res.status(200).send({ message: "Successfully deleted user", user });
  } catch (error) {
    console.log(error);
  }
}