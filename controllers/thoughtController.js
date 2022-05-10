const { User, Thought, reactionSchema } = require("../models");

module.exports = {
  // Get single thought
  async getSingleThought(req, res) {
    try {
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
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateThought(req, res) {
    try {
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async removeThought(req, res) {
    try {
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
