import express from "express";
import { URL } from "url";
import querystring from "querystring";
import Country from "../models/countries.model.js";
import { Url } from "url";
const countryRouter = express.Router();

countryRouter.get("/", async (req, res) => {
  try {
    const country = await Country.findAll();
    res.send(country);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
countryRouter.get("/name/:name", async (req, res) => {
  try {
    const country = await Country.findOne({
      where: { name: req.params.name },
    });
    res.send(country);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
countryRouter.get("/currency/:cop", async (req, res) => {
  try {
    const country = await Country.findOne({
      where: { currency: req.params.cop },
    });
    res.send(country);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
countryRouter.get("/lang/:lang", async (req, res) => {
  try {
    const country = await Country.findOne({
      where: { language: req.params.lang },
    });
    res.send(country);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
countryRouter.get("/capital/:cap", async (req, res) => {
  try {
    const country = await Country.findOne({
      where: { capital: req.params.cap },
    });
    res.send(country);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
countryRouter.get("/region/:reg", async (req, res) => {
  try {
    const country = await Country.findAll({
      where: { region: req.params.reg },
    });
    res.send(country);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
countryRouter.patch("/:id", async (req, res) => {
  try {
    const country = await Country.update(
      {
        name: req.body.name,
        nativeName: req.body.nativeName,
        capital: req.body.capital,
        region: req.body.region,
        subRegion: req.body.subRegion,
        population: req.body.population,
        domen: req.body.domen,
        borderCountries: req.body.borderCountries,
        flag: req.body.flag,
        currency: req.body.currency,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.send(country);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
countryRouter.post("/", async (req, res) => {
  try {
    const data = req.body;
    const country = await Country.bulkCreate(data);
    res.send(country);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
countryRouter.post("/all", async (req, res) => {
  try {
    const data = req.body;
    await data?.map((item) => {
      const country = Country.create(item);
    }); 
    res.send("insert data succesfuly")
  } catch (error) {
    res.status(400).send("not insert data")
  }
});

export default countryRouter;
