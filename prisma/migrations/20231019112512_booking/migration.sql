-- CreateTable
CREATE TABLE "serviceBooking" (
    "id" TEXT NOT NULL,
    "bookedBy" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "serviceBooking_pkey" PRIMARY KEY ("id")
);
