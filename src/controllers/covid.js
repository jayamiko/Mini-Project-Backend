import fetch from "node-fetch";
import {Covid} from "../models/datacovid";

// FETCH
exports.fetchAPI = async (req, res) => {
  const url = "https://data.covid19.go.id/public/api/update.json";
  const options = {
    method: "GET",
  };

  const response = await fetch(url, options).then((res) => res.json());
  const data = new Covid({
    penambahan: {
      jumlah_positif: response.update.penambahan.jumlah_positif,
      jumlah_meninggal: response.update.penambahan.jumlah_meninggal,
      jumlah_sembuh: response.update.penambahan.jumlah_sembuh,
      jumlah_dirawat: response.update.penambahan.jumlah_dirawat,
      tanggal: response.update.penambahan.tanggal,
      created: response.update.penambahan.created,
    },
    total: {
      jumlah_positif: response.update.total.jumlah_positif,
      jumlah_dirawat: response.update.total.jumlah_dirawat,
      jumlah_sembuh: response.update.total.jumlah_sembuh,
      jumlah_meninggal: response.update.total.jumlah_meninggal,
    },
  });
  // Save to Mongodb
  data
    .save()
    .then((doc) => {
      res.status(200).send(doc);
    })
    .catch((err) => {
      res.status(400).send(err);
      console.error({
        message: "Error",
        error: err,
      });
    });
};

// GET DATA
exports.getData = async (req, res) => {
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

// ADD DATA
exports.addCovid = async (req, res) => {
  const url = "https://data.covid19.go.id/public/api/update.json";
  const options = {
    method: "GET",
  };

  const response = await fetch(url, options).then((res) => res.json());
  const additional = response.update.penambahan;
  const total = response.update.total;
  const data = await new Covid({
    penambahan: {
      jumlah_positif: additional.jumlah_positif,
      jumlah_meninggal: additional.jumlah_meninggal,
      jumlah_sembuh: additional.jumlah_sembuh,
      jumlah_dirawat: additional.jumlah_dirawat,
      tanggal: additional.tanggal,
      created: Date.now(),
    },
    total: {
      jumlah_positif: total.jumlah_positif,
      jumlah_dirawat: total.jumlah_dirawat,
      jumlah_sembuh: total.jumlah_sembuh,
      jumlah_meninggal: total.jumlah_meninggal,
    },
  });

  data.save().then((doc) => {
    res.status(200).send({
      status: "success",
      message: "Add Data Succesfully",
      data: doc,
    });
  });
};
