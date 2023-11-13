/*
  Warnings:

  - The `companion` column on the `invites` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "invites" DROP COLUMN "companion",
ADD COLUMN     "companion" BOOLEAN NOT NULL DEFAULT false;
