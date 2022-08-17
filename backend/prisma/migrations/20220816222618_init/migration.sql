-- CreateTable
CREATE TABLE "Country" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "countryName" TEXT NOT NULL,
    "callingCode" TEXT,
    "capital" TEXT,
    "population" INTEGER,
    "currency" TEXT,
    "flag" TEXT
);

-- CreateTable
CREATE TABLE "ExchangeRates" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" TEXT NOT NULL,
    "base" TEXT,
    "rateUSD" TEXT,
    "rateAUD" TEXT,
    "rateGBP" TEXT,
    "rateBRL" TEXT,
    "rateCNY" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Country_countryName_key" ON "Country"("countryName");

-- CreateIndex
CREATE UNIQUE INDEX "ExchangeRates_date_key" ON "ExchangeRates"("date");
