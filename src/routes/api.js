import express from "express";
const router = express.Router();

const {getData, addCovid, fetchAPI} = require("../controllers/covid");

// Route User
router.get("/covids", getData);
router.get("/save", fetchAPI);
router.get("/covid", addCovid);

export default router;
