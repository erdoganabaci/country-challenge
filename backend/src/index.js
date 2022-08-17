const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.post(`/createCountry`, async (req, res) => {
    const { countryName, callingCode, capital, population, currency, flag } =
        req.body;
    const getCountryByName = await prisma.country.findUnique({
        where: {
            countryName: countryName
        }
    });
    // check wheather the country is already in the database
    if (getCountryByName) {
        res.status(400).send({ error: 400, message: "Country already exists" });
    } else {
        const result = await prisma.country.create({
            data: {
                countryName,
                callingCode,
                capital,
                population,
                currency,
                flag
            }
        });
        res.json(result);
    }
});

app.post(`/createExchangeRates`, async (req, res) => {
    const { date, base, rateUSD, rateAUD, rateGBP, rateBRL, rateCNY } =
        req.body;

    const getExchangeRatesByDate = await prisma.exchangeRates.findUnique({
        where: {
            date: date
        }
    });
    // check wheather the date is already in the database
    if (getExchangeRatesByDate) {
        res.status(400).send({
            error: 400,
            message: "Exchange rates already exists"
        });
    } else {
        const result = await prisma.exchangeRates.create({
            data: {
                date,
                base,
                rateUSD,
                rateAUD,
                rateGBP,
                rateBRL,
                rateCNY
            }
        });
        res.json(result);
    }
});

const server = app.listen(3000, () =>
    console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`)
);
