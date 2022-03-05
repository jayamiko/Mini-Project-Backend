const {Covid} = require("../models/datacovid");

// Routes
exports.getCovid = async (req, res) => {
  try {
    let data = await Covid.find().then((covids) => {
      res.send({
        status: "success",
        data: covids,
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server error",
    });
  }
};

exports.addCovid = async (req, res) => {
  try {
    let data = await new Covid({
      positif: req.body.positif,
    });

    data.save().then((doc) => {
      res.status(200).send({
        status: "success",
        message: "Add Covid Succesfully",
        data: doc,
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500),
      send({
        status: "Failed",
        message: "Server Error",
      });
  }
};
