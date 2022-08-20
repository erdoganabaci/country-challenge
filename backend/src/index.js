import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors());

app.get("/countries", async (req, res) => {
    const countries = await prisma.country.findMany();
    res.json(countries);
});

app.get("/country/:id/", async (req, res) => {
    const { id } = req.params;
    const country = await prisma.country.findUnique({
        where: {
            id
        }
    });

    res.json(country);
});

const server = app.listen(3001, () =>
    console.log(`
🚀 Server ready at: http://localhost:3001
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`)
);
