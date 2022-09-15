const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const register = async (params) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(params.password, salt);
    const newUser = new User({
      name: params.name,
      email: params.email,
      password: hashedPass,
      avatar: "avatar.png",
      role: params.role,
    });

    await newUser.save();
    return "User was registered successfully! ";
  } catch (err) {
    throw err;
  }
};

const login = async (params) => {
  try {
    const user = await User.findOne({ email: params.email });
    if (!user) throw "email not found";

    const validate = await bcrypt.compare(params.password, user.password);
    if (!validate) throw "Invalid Password!";

    const token = jwt.sign({ email: user.email }, process.env.SECRET, {
      expiresIn: "30d",
    });
    const { password, ...userRes } = user._doc;
    return { ...userRes, token };
  } catch (err) {
    throw err;
  }
};
module.exports = {
  register,
  login,
};
