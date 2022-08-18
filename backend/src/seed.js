import { PrismaClient } from "@prisma/client";
import fs from "fs";
import fetch from "node-fetch";

const FILE_URI = `./currencies.json`;

const prisma = new PrismaClient();

async function readFile(FILE_PATH) {
    try {
        const data = await fs.promises.readFile(FILE_PATH, "utf8");
        return JSON.parse(data);
    } catch (err) {
        return false;
    }
}

const currencies = await readFile(FILE_URI);

// 31 day average of EUR
function getAverageOfCurrency(countryCode) {
    const usdAverageCurrency =
        currencies.reduce(function (acc, currency) {
            return acc + currency.rates[countryCode];
        }, 0) / currencies.length;
    return usdAverageCurrency.toFixed(2);
}

const countryShortNames = ["usa", "aus", "gb", "brazil", "cn"];

async function getCountries() {
    const arrOfPromises = countryShortNames.map((countryShortName) =>
        fetch(`https://restcountries.com/v3.1/name/${countryShortName}`).then(
            (response) => response.json()
        )
    );
    return Promise.all(arrOfPromises);
}

const countries = await getCountries();

const seedCountries = countries.map((country) => {
    const countryName = country[0].name.common;
    let callingCode = country[0].idd.root + country[0].idd.suffixes[0];
    const capital = country[0].capital[0];
    // add commas as thousands separators
    const population = country[0].population.toLocaleString();
    const currency = Object.keys(country[0].currencies)[0];
    const flag = country[0].flags.png;
    const avarageCurrency = getAverageOfCurrency(currency);
    if (countryName === "United States") {
        callingCode = "+1";
    }
    const seedCountry = {
        countryName,
        callingCode,
        capital,
        population,
        currency,
        flag,
        avarageCurrency
    };
    return seedCountry;
});

async function main() {
    console.log(`Start seeding ...`);
    for (const seedCountry of seedCountries) {
        const country = await prisma.country.create({
            data: seedCountry
        });
        console.log(`Created country with id: ${country.id}`);
    }
    console.log(`Seeding finished.`);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
