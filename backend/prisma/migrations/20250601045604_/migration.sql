/*
  Warnings:

  - Added the required column `url` to the `Flowers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Flowers` ADD COLUMN `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `url` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `History` MODIFY `view_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
