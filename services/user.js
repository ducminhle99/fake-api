const User = require("../models/user");

const getList = async () => {
  try {
    const listUser = await User.find();
    return listUser;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getList,
};
