import fetch from "node-fetch";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const BASE_URL = "http://data.fixer.io/api/";

const generateNumbers = Array.from({ length: 31 }, Number.call, (i) => i + 1);
const generateDates = generateNumbers.map((number) => {
    const checkDigit = /^\d$/.test(number);
    if (checkDigit) {
        return `2022-07-0${number}`;
    }
    return `2022-07-${number}`;
});

async function getCurrencies() {
    const arrOfPromises = generateDates.map((date) =>
        fetch(
            `${BASE_URL}/${date}?access_key=${process.env.API_KEY}&symbols=USD,AUD,GBP,BRL,CNY&format=1`
        ).then((response) => response.json())
    );
    return Promise.all(arrOfPromises);
}

// const currencies = await getCurrencies();
// console.log(currencies);

async function writeFile(filename, writedata) {
    try {
        await fs.promises.writeFile(filename, writedata, "utf8");
        console.log("Currency added successfully");
        return true;
    } catch (err) {
        console.log("Currency adding failed");
        return false;
    }
}
const julyCurrencies = [
    {
        success: true,
        timestamp: 1656719999,
        historical: true,
        base: "EUR",
        date: "2022-07-01",
        rates: {
            USD: 1.042857,
            AUD: 1.530238,
            GBP: 0.86151,
            BRL: 5.560984,
            CNY: 6.988228
        }
    },
    {
        success: true,
        timestamp: 1656806399,
        historical: true,
        base: "EUR",
        date: "2022-07-02",
        rates: {
            USD: 1.042857,
            AUD: 1.530238,
            GBP: 0.86151,
            BRL: 5.560984,
            CNY: 6.988228
        }
    },
    {
        success: true,
        timestamp: 1656892799,
        historical: true,
        base: "EUR",
        date: "2022-07-03",
        rates: {
            USD: 1.043362,
            AUD: 1.530879,
            GBP: 0.862141,
            BRL: 5.563729,
            CNY: 6.992089
        }
    },
    {
        success: true,
        timestamp: 1656979199,
        historical: true,
        base: "EUR",
        date: "2022-07-04",
        rates: {
            USD: 1.043286,
            AUD: 1.517851,
            GBP: 0.861238,
            BRL: 5.560502,
            CNY: 6.990119
        }
    },
    {
        success: true,
        timestamp: 1657065599,
        historical: true,
        base: "EUR",
        date: "2022-07-05",
        rates: {
            USD: 1.027079,
            AUD: 1.510438,
            GBP: 0.858859,
            BRL: 5.532774,
            CNY: 6.901865
        }
    },
    {
        success: true,
        timestamp: 1657151999,
        historical: true,
        base: "EUR",
        date: "2022-07-06",
        rates: {
            USD: 1.018382,
            AUD: 1.502087,
            GBP: 0.854519,
            BRL: 5.529709,
            CNY: 6.831295
        }
    },
    {
        success: true,
        timestamp: 1657238399,
        historical: true,
        base: "EUR",
        date: "2022-07-07",
        rates: {
            USD: 1.016369,
            AUD: 1.486136,
            GBP: 0.845425,
            BRL: 5.42732,
            CNY: 6.811698
        }
    },
    {
        success: true,
        timestamp: 1657324799,
        historical: true,
        base: "EUR",
        date: "2022-07-08",
        rates: {
            USD: 1.018589,
            AUD: 1.481744,
            GBP: 0.846356,
            BRL: 5.353198,
            CNY: 6.81966
        }
    },
    {
        success: true,
        timestamp: 1657411199,
        historical: true,
        base: "EUR",
        date: "2022-07-09",
        rates: {
            USD: 1.018589,
            AUD: 1.485473,
            GBP: 0.846742,
            BRL: 5.352767,
            CNY: 6.81966
        }
    },
    {
        success: true,
        timestamp: 1657497599,
        historical: true,
        base: "EUR",
        date: "2022-07-10",
        rates: {
            USD: 1.018589,
            AUD: 1.485473,
            GBP: 0.846742,
            BRL: 5.352767,
            CNY: 6.81966
        }
    },
    {
        success: true,
        timestamp: 1657583999,
        historical: true,
        base: "EUR",
        date: "2022-07-11",
        rates: {
            USD: 1.008141,
            AUD: 1.496513,
            GBP: 0.848512,
            BRL: 5.397889,
            CNY: 6.770473
        }
    },
    {
        success: true,
        timestamp: 1657670399,
        historical: true,
        base: "EUR",
        date: "2022-07-12",
        rates: {
            USD: 1.0022,
            AUD: 1.490777,
            GBP: 0.844043,
            BRL: 5.390328,
            CNY: 6.747408
        }
    },
    {
        success: true,
        timestamp: 1657756799,
        historical: true,
        base: "EUR",
        date: "2022-07-13",
        rates: {
            USD: 1.003235,
            AUD: 1.490216,
            GBP: 0.845678,
            BRL: 5.409846,
            CNY: 6.74044
        }
    },
    {
        success: true,
        timestamp: 1657843199,
        historical: true,
        base: "EUR",
        date: "2022-07-14",
        rates: {
            USD: 1.002531,
            AUD: 1.484233,
            GBP: 0.846803,
            BRL: 5.43803,
            CNY: 6.773303
        }
    },
    {
        success: true,
        timestamp: 1657929599,
        historical: true,
        base: "EUR",
        date: "2022-07-15",
        rates: {
            USD: 1.008695,
            AUD: 1.48614,
            GBP: 0.85086,
            BRL: 5.454822,
            CNY: 6.816157
        }
    },
    {
        success: true,
        timestamp: 1658015999,
        historical: true,
        base: "EUR",
        date: "2022-07-16",
        rates: {
            USD: 1.008695,
            AUD: 1.484684,
            GBP: 0.850896,
            BRL: 5.464071,
            CNY: 6.816157
        }
    },
    {
        success: true,
        timestamp: 1658102399,
        historical: true,
        base: "EUR",
        date: "2022-07-17",
        rates: {
            USD: 1.009589,
            AUD: 1.481874,
            GBP: 0.849267,
            BRL: 5.463493,
            CNY: 6.822298
        }
    },
    {
        success: true,
        timestamp: 1658188799,
        historical: true,
        base: "EUR",
        date: "2022-07-18",
        rates: {
            USD: 1.014482,
            AUD: 1.489727,
            GBP: 0.849106,
            BRL: 5.517058,
            CNY: 6.840955
        }
    },
    {
        success: true,
        timestamp: 1658275199,
        historical: true,
        base: "EUR",
        date: "2022-07-19",
        rates: {
            USD: 1.023096,
            AUD: 1.48359,
            GBP: 0.852382,
            BRL: 5.53966,
            CNY: 6.900475
        }
    },
    {
        success: true,
        timestamp: 1658361599,
        historical: true,
        base: "EUR",
        date: "2022-07-20",
        rates: {
            USD: 1.018242,
            AUD: 1.478492,
            GBP: 0.850588,
            BRL: 5.571516,
            CNY: 6.879143
        }
    },
    {
        success: true,
        timestamp: 1658447999,
        historical: true,
        base: "EUR",
        date: "2022-07-21",
        rates: {
            USD: 1.022072,
            AUD: 1.476395,
            GBP: 0.85205,
            BRL: 5.620682,
            CNY: 6.915951
        }
    },
    {
        success: true,
        timestamp: 1658534399,
        historical: true,
        base: "EUR",
        date: "2022-07-22",
        rates: {
            USD: 1.021408,
            AUD: 1.473827,
            GBP: 0.850855,
            BRL: 5.615504,
            CNY: 6.895839
        }
    },
    {
        success: true,
        timestamp: 1658620799,
        historical: true,
        base: "EUR",
        date: "2022-07-23",
        rates: {
            USD: 1.021408,
            AUD: 1.474745,
            GBP: 0.850855,
            BRL: 5.614346,
            CNY: 6.895839
        }
    },
    {
        success: true,
        timestamp: 1658707199,
        historical: true,
        base: "EUR",
        date: "2022-07-24",
        rates: {
            USD: 1.019987,
            AUD: 1.477313,
            GBP: 0.850978,
            BRL: 5.608094,
            CNY: 6.88644
        }
    },
    {
        success: true,
        timestamp: 1658793599,
        historical: true,
        base: "EUR",
        date: "2022-07-25",
        rates: {
            USD: 1.022338,
            AUD: 1.470807,
            GBP: 0.848101,
            BRL: 5.477485,
            CNY: 6.901858
        }
    },
    {
        success: true,
        timestamp: 1658879999,
        historical: true,
        base: "EUR",
        date: "2022-07-26",
        rates: {
            USD: 1.01292,
            AUD: 1.458063,
            GBP: 0.841559,
            BRL: 5.420743,
            CNY: 6.850677
        }
    },
    {
        success: true,
        timestamp: 1658966399,
        historical: true,
        base: "EUR",
        date: "2022-07-27",
        rates: {
            USD: 1.020773,
            AUD: 1.459331,
            GBP: 0.839285,
            BRL: 5.353441,
            CNY: 6.898897
        }
    },
    {
        success: true,
        timestamp: 1659052799,
        historical: true,
        base: "EUR",
        date: "2022-07-28",
        rates: {
            USD: 1.019197,
            AUD: 1.456227,
            GBP: 0.837275,
            BRL: 5.283717,
            CNY: 6.876828
        }
    },
    {
        success: true,
        timestamp: 1659139199,
        historical: true,
        base: "EUR",
        date: "2022-07-29",
        rates: {
            USD: 1.022547,
            AUD: 1.463414,
            GBP: 0.839874,
            BRL: 5.289434,
            CNY: 6.896264
        }
    },
    {
        success: true,
        timestamp: 1659225599,
        historical: true,
        base: "EUR",
        date: "2022-07-30",
        rates: {
            USD: 1.022547,
            AUD: 1.463414,
            GBP: 0.839874,
            BRL: 5.289434,
            CNY: 6.896264
        }
    },
    {
        success: true,
        timestamp: 1659311999,
        historical: true,
        base: "EUR",
        date: "2022-07-31",
        rates: {
            USD: 1.020668,
            AUD: 1.464189,
            GBP: 0.838897,
            BRL: 5.279616,
            CNY: 6.883591
        }
    }
];

await writeFile("currencies.json", JSON.stringify(julyCurrencies));
