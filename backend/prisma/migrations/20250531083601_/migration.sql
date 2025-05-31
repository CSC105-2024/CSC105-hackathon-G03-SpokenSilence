-- DropForeignKey
ALTER TABLE `History` DROP FOREIGN KEY `History_user_id_fkey`;

-- DropIndex
DROP INDEX `History_user_id_fkey` ON `History`;

-- AlterTable
ALTER TABLE `History` MODIFY `user_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `History` ADD CONSTRAINT `History_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
