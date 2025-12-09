-- CreateTable
CREATE TABLE "StockThreshold" (
    "id" SERIAL NOT NULL,
    "supplierId" INTEGER NOT NULL,
    "alert_threshold" INTEGER NOT NULL DEFAULT 100,

    CONSTRAINT "StockThreshold_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StockThreshold_supplierId_key" ON "StockThreshold"("supplierId");

-- AddForeignKey
ALTER TABLE "StockThreshold" ADD CONSTRAINT "StockThreshold_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Supplier"("id") ON DELETE CASCADE ON UPDATE CASCADE;
