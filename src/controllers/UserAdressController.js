const express = require("express");
const { Promise } = require("mongoose");
const router = express.Router();

const User = require("../models/User");
const Adress = require("../models/Adress");

router.post("/adressrecord", async (req, res) => {
  try {
    const { name, adress } = req.body;

    const user = await User.create({ name });

    await Promise.all(
      adress.map(async (adress) => {
        const userAdress = new Adress({
          ...adress,
          user: user._id,
        });
        await userAdress.save();

        user.adress.push(userAdress);
      })
    );

    await user.save();

    return res.send({ user });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ error: "error registering user address " });
  }
});

router.get("/user", async (req, res) => {});
