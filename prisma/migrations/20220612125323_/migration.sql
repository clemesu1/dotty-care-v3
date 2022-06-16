/*
  Warnings:

  - You are about to drop the `OperatorInformation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "OperatorInformation";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "CallTransaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "vehicleId" TEXT NOT NULL,
    "driverId" TEXT NOT NULL,
    "attendantId" TEXT NOT NULL,
    "assistantId" TEXT NOT NULL,
    "vehicleStatus" TEXT NOT NULL
);
