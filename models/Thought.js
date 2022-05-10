const { Schema, model } = require("mongoose");
const reactionSchema = require("./reactionSchema");
// Import dayjs for date-time formatting
const dayjs = require("dayjs");

// Thought model schema
const thoughtSchema = new Schema(
  {
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAt) => dayjs(createdAt).format("DD-MM-YY hh:mm"),
    },
    username: { type: String, required: true },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thoughts",
      },
    ],
    reactions: [reactionSchema],
  },
  {
    // Virtuals enabled for reactions count
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

// Virtual for reaction count
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Thought model init
const Thought = model("thought", thoughtSchema);

module.exports = Thought;
