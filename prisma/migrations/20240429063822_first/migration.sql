-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateTable
CREATE TABLE "Actor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "DOB" TIMESTAMP(3) NOT NULL,
    "bio" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Actor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movie" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "yearOfRelease" INTEGER NOT NULL,
    "plot" TEXT NOT NULL,
    "poster" TEXT NOT NULL,
    "producerId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
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

-- CreateTable
CREATE TABLE "_ActorToMovie" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Actor_email_key" ON "Actor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_ActorToMovie_AB_unique" ON "_ActorToMovie"("A", "B");

-- CreateIndex
CREATE INDEX "_ActorToMovie_B_index" ON "_ActorToMovie"("B");

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_producerId_fkey" FOREIGN KEY ("producerId") REFERENCES "Producer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ActorToMovie" ADD CONSTRAINT "_ActorToMovie_A_fkey" FOREIGN KEY ("A") REFERENCES "Actor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ActorToMovie" ADD CONSTRAINT "_ActorToMovie_B_fkey" FOREIGN KEY ("B") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;
