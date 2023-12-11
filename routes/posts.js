var mongoose = require("mongoose");
const { stringify } = require("uuid");
// const User = require("./users")

const postSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: String,
  description: String,
  image: String,
});

const User = mongoose.model("Posts", postSchema);
module.exports = User;
