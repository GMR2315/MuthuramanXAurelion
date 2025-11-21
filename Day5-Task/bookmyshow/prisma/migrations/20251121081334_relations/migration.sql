-- CreateEnum
CREATE TYPE "Certificate" AS ENUM ('A', 'UA');

-- CreateEnum
CREATE TYPE "Language" AS ENUM ('Tamil', 'English', 'Telugu', 'Hindi');

-- CreateTable
CREATE TABLE "Movie" (
    "movie_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "genre" TEXT[],
    "language" "Language" NOT NULL,
    "imdb_rating" TEXT NOT NULL,
    "certificate" "Certificate" NOT NULL,
    "movie_image" TEXT NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("movie_id")
);

-- CreateTable
CREATE TABLE "MovieDetails" (
    "moviedetails_id" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "actor" TEXT[],
    "music" TEXT NOT NULL,
    "producer" TEXT[],
    "story" TEXT[],
    "movie_id" TEXT NOT NULL,

    CONSTRAINT "MovieDetails_pkey" PRIMARY KEY ("moviedetails_id")
);

-- CreateTable
CREATE TABLE "Show" (
    "show_id" TEXT NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "language" "Language" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "movie_id" TEXT NOT NULL,

    CONSTRAINT "Show_pkey" PRIMARY KEY ("show_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MovieDetails_movie_id_key" ON "MovieDetails"("movie_id");

-- AddForeignKey
ALTER TABLE "MovieDetails" ADD CONSTRAINT "MovieDetails_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "Movie"("movie_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Show" ADD CONSTRAINT "Show_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "Movie"("movie_id") ON DELETE RESTRICT ON UPDATE CASCADE;
