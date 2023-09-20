/*
  Warnings:

  - You are about to drop the column `profileId` on the `products` table. All the data in the column will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_profileId_fkey";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "profileId";

-- DropTable
DROP TABLE "Profile";
