-- CreateTable
CREATE TABLE "Restaurant" (
    "restaurant_id" TEXT NOT NULL,
    "restaurant_title" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "delivery_time" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "cuisines" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Restaurant_pkey" PRIMARY KEY ("restaurant_id")
);
