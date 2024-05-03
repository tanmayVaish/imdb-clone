/*
  Warnings:

  - You are about to drop the column `producerId` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `DOB` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `bio` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `_ActorMovies` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Movie" DROP CONSTRAINT "Movie_producerId_fkey";

-- DropForeignKey
ALTER TABLE "_ActorMovies" DROP CONSTRAINT "_ActorMovies_A_fkey";

-- DropForeignKey
ALTER TABLE "_ActorMovies" DROP CONSTRAINT "_ActorMovies_B_fkey";

-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "producerId";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "DOB",
DROP COLUMN "bio",
DROP COLUMN "gender";

-- DropTable
DROP TABLE "_ActorMovies";

-- CreateTable
CREATE TABLE "Actor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "DOB" TIMESTAMP(3) NOT NULL,
    "bio" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Actor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Producer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "DOB" TIMESTAMP(3) NOT NULL,
    "bio" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Producer_pkey" PRIMARY KEY ("id")
);
