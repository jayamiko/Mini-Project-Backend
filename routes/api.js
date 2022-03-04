const express = require("express");

const router = express.Router();

const CovidPost = require("../models/covid");

// Routes
router.get("/", (req, res) => {
  let data = "https://data.covid19.go.id/public/api/update.json";
  CovidPost.find({})
    .then((data) => {
      res.json(data);
      console.log("Data: ", data);
    })
    .catch((error) => {
      console.log("error: ", error);
      throw error;
    });
});

router.post("/save", (req, res) => {
  const data = {
    jumlah_positif: 100,
    jumlah_sembuh: 100,
    jumlah_meninggal: 100,
    jumlah_dirawatif: 100,
  };

  const newCovidPost = new CovidPost(data);

  newCovidPost.save((error) => {
    if (error) {
      res.status(500).json({msg: "Sorry, internal server errors"});
      throw error;
      return;
    }
    return res.json({
      msg: "Your data has been saved!!!!!!",
    });
  });
});

module.exports = router;
