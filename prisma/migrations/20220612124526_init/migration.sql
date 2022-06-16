-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_OperatorInformation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "vehicleId" TEXT NOT NULL,
    "driverId" TEXT NOT NULL,
    "attendantId" TEXT NOT NULL,
    "assistantId" TEXT NOT NULL,
    "vehicleStatus" TEXT NOT NULL
);
INSERT INTO "new_OperatorInformation" ("assistantId", "attendantId", "driverId", "id", "vehicleId", "vehicleStatus") SELECT "assistantId", "attendantId", "driverId", "id", "vehicleId", "vehicleStatus" FROM "OperatorInformation";
DROP TABLE "OperatorInformation";
ALTER TABLE "new_OperatorInformation" RENAME TO "OperatorInformation";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
