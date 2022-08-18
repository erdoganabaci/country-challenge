-- CreateTable
CREATE TABLE "Country" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "countryName" TEXT NOT NULL,
    "callingCode" TEXT,
    "capital" TEXT,
    "population" INTEGER,
    "currency" TEXT,
    "flag" TEXT,
    "avarageCurrency" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Country_countryName_key" ON "Country"("countryName");
