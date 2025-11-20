-- CreateTable
CREATE TABLE "Movie" (
    "movie_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "imdb_rating" TEXT NOT NULL,
    "age_rating" TEXT NOT NULL,
    "movie_image" TEXT NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("movie_id")
);
