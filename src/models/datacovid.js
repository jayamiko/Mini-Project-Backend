import mongoose from "mongoose";

const Covid = mongoose.model("Covid", {
  penambahan: [
    {
      jumlah_positif: {
        type: Number,
      },
      jumlah_meninggal: {
        type: Number,
      },
      jumlah_sembuh: {
        type: Number,
      },
      jumlah_dirawat: {
        type: Number,
      },
      tanggal: {
        type: Date,
        default: Date.now,
      },
      created: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  total: [
    {
      jumlah_positif: {
        type: Number,
      },
      jumlah_dirawat: {
        type: Number,
      },
      jumlah_sembuh: {
        type: Number,
      },
      jumlah_meninggal: {
        type: Number,
      },
    },
  ],
});

export {Covid};
