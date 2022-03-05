const express = require("express");
const router = express.Router();

const {getCovid, addCovid} = require("../controllers/covids");

// Route User
router.get("/covids", getCovid);
router.post("/covid", addCovid);

module.exports = router;
