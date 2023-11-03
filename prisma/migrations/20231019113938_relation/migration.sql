-- AddForeignKey
ALTER TABLE "serviceBooking" ADD CONSTRAINT "serviceBooking_bookedBy_fkey" FOREIGN KEY ("bookedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
