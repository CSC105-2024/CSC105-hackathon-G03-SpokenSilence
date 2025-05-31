-- CreateTable
CREATE TABLE "Users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Flowers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "message" TEXT NOT NULL,
    "url_flower" TEXT NOT NULL,
    "access_key" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    CONSTRAINT "Flowers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "History" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "flower_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "view_at" DATETIME NOT NULL,
    CONSTRAINT "History_flower_id_fkey" FOREIGN KEY ("flower_id") REFERENCES "Flowers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "History_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Meaning" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mean" TEXT NOT NULL,
    "flower_id" INTEGER NOT NULL,
    CONSTRAINT "Meaning_flower_id_fkey" FOREIGN KEY ("flower_id") REFERENCES "Flowers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
