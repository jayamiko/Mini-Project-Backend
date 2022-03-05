const mongoose = require("mongoose");

const Covid = mongoose.model("Covid", {
  positif: {
    type: Number,
    default: null,
  },
});

module.exports = {Covid};
