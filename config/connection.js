const { connect, connection } = require("mongoose");

// Create a new Mongo Database called socialDB
connect("mongodb://localhost/socialDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
