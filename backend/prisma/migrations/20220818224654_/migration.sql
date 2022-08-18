-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Country" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "countryName" TEXT NOT NULL,
    "callingCode" TEXT,
    "capital" TEXT,
    "population" TEXT,
    "currency" TEXT,
    "flag" TEXT,
    "avarageCurrency" TEXT
);
INSERT INTO "new_Country" ("avarageCurrency", "callingCode", "capital", "countryName", "currency", "flag", "id", "population") SELECT "avarageCurrency", "callingCode", "capital", "countryName", "currency", "flag", "id", "population" FROM "Country";
DROP TABLE "Country";
ALTER TABLE "new_Country" RENAME TO "Country";
CREATE UNIQUE INDEX "Country_countryName_key" ON "Country"("countryName");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
