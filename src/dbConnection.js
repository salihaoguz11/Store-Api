"use strict";
/* -------------------------------------------------------
    EXPRESS - Store API
------------------------------------------------------- */
// MongoDB Connection:

const mongoose = require("mongoose");
const dbConnection = function () {
  //Connect
  mongoose
    .connect(process.env.MONGODB)
    .then(() => console.log("* DB Connected * "))
    .catch((err) => console.log("* DB Not Connected * ", err));
};

/* ------------------------------------------------------- */
module.exports = {
  mongoose,
  dbConnection,
  //proje de dbConnection sadece bir kez cagirmak icin burada
  // cagirip daha sonra export ediyoruz.
};
