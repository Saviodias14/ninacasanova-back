-- CreateTable
CREATE TABLE "gifts" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "link" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "avaliable" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "gifts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "invites" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "phone" TEXT NOT NULL,
    "companion" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "invites_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "messages" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gifters" (
    "id" SERIAL NOT NULL,
    "giftId" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "phone" TEXT NOT NULL,
    "message" TEXT,

    CONSTRAINT "gifters_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "gifts_name_key" ON "gifts"("name");

-- CreateIndex
CREATE UNIQUE INDEX "invites_name_key" ON "invites"("name");

-- CreateIndex
CREATE UNIQUE INDEX "invites_phone_key" ON "invites"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "gifters_giftId_key" ON "gifters"("giftId");

-- AddForeignKey
ALTER TABLE "gifters" ADD CONSTRAINT "gifters_giftId_fkey" FOREIGN KEY ("giftId") REFERENCES "gifts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
