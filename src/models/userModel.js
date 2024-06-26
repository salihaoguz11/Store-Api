"use strict";

/* -------------------------------------------------------
    EXPRESS - STORE API - Product Model
------------------------------------------------------- */

const { mongoose } = require("../dbConnection");
const passwordEncrypt = require("../helpers/passwordEncrypte");

// ! burda kaç tane rol varsa tanımlanacak, cookie içerisinde
const UsersSchema = new mongoose.Schema(
  {
    // idyi kendisi veriyor
    email: {
      type: String,
      trim: true,
      // ekrana çıkacak hata
      required: [true, "Email must be required."],
      unique: true,
      validate: [
        (email) => email.includes("@") && email.includes("."),
        "Email type is incorrect",
      ],
    },
    // __v: Number, otomatik geliyo
    password: {
      type: String,
      trim: true,
      required: true,
      set: (password) => passwordEncrypt(password),
    },
    isAdmin: {
      type: Boolean,
    },
  },
  {
    collection: "user",
    timestamps: true,
    //createdAt, updatedAt eklendi.
  }
);

module.exports = mongoose.model("User", UsersSchema);
