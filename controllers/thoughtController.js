const { User, Thought, reactionSchema } = require("../models");

module.exports = {
  // Get single thought
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });
      !thought
        ? res.status(404).json({ message: "No thought with that ID" })
        : res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { thoughts: thought._id.toHexString() } },
        { new: true }
      );
      console.log(`Thought created by user: ${user._id}`);
      return res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      // Check if thought exists
      !thought
        ? res
            .status(404)
            .json({ message: "I can't find a thought with that ID!" })
        : res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async removeThought(req, res) {
    try {
      const thought = await Thought.findOneAndRemove({
        _id: req.params.thoughtId,
      });
      // Check if thought exists
      if (!thought) {
        res
          .status(404)
          .json({ message: "I can't find a thought with that ID!" });
      } else {
        res.json({ message: "Thought removed" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async createReaction(req, res) {
    try {
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async removeReaction(req, res) {
    try {
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
