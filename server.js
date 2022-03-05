import express from "express";
import {mongoose} from "./src/configs/db";
import {Covid} from "./src/models/datacovid";
import router from "./src/routes/api";
import fetch from "node-fetch";
import schedule from "node-schedule";

const PORT = 3000;

const app = express();

app.use(express.json());
app.use("/api/v1/", router);

// PART B (SCHEDULER 11:59 PM)
const API = "https://data.covid19.go.id/public/api/update.json";

schedule.scheduleJob("59 23 * * *", () => {
  async function getAPI() {
    const result = await fetch(API).then((res) => res.json());
    const additional = result.update.penambahan;
    const total = result.update.total;
    const data = await new Covid({
      penambahan: {
        jumlah_positif: 20,
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

    data
      .save()
      .then((doc) => {
        console.log("Add Data has Succesfully");
        // console.log(doc);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getAPI();
});

app.listen(PORT, () => {
  console.log(`Started on port ${PORT}`);
});
