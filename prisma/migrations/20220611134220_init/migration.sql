-- CreateTable
CREATE TABLE "OperatorInformation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "vehicleId" TEXT NOT NULL,
    "driverId" TEXT NOT NULL,
    "attendantId" TEXT NOT NULL,
    "assistantId" TEXT NOT NULL,
    "vehicleStatus" TEXT NOT NULL
);
