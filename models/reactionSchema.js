const { Schema, Types } = require("mongoose");
// Import dayjs for date-time formatting
const dayjs = require("dayjs");

// Reaction model schema
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: { type: String, required: true, maxLength: 280 },
    username: { type: String, required: true },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAt) => dayjs(createdAt).format("DD-MM-YY hh:mm"),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

// Export the reaction schema
module.exports = reactionSchema;
