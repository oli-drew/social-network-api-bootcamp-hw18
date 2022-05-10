const { User, Thought } = require("../models");

module.exports = {
  // Get single user by ID
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId }).select(
        "-__v"
      );
      // Check if user exists
      !user
        ? res.status(404).json({ message: "I can't find a user with that ID!" })
        : res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // Update an existing user
  updateUser(req, res) {},
  // Remove existing user
  removeUser(req, res) {},
  // Add a friend to user
  addFriend(req, res) {},
  // Remove friend from user
  removeFriend(req, res) {},
};
