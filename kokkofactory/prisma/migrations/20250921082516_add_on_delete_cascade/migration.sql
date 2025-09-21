-- DropForeignKey
ALTER TABLE "Shipment" DROP CONSTRAINT "Shipment_customerId_fkey";

-- AddForeignKey
ALTER TABLE "Shipment" ADD CONSTRAINT "Shipment_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
