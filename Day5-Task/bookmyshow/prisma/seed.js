import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.movie.createMany({
    data: [
      // 🇮🇳 Indian Movies
      {
        title: "Kalki 2898 AD",
        genre: "Sci-Fi, Action",
        language: "Telugu, Hindi",
        imdb_rating: "8.3",
        age_rating: "UA",
        movie_image: "https://assets.bookmyshow.com/movies/kalki2898ad.jpg"
      },
      {
        title: "Leo",
        genre: "Action, Thriller",
        language: "Tamil",
        imdb_rating: "7.9",
        age_rating: "UA",
        movie_image: "https://assets.bookmyshow.com/movies/leo.jpg"
      },
      {
        title: "Jawan",
        genre: "Action, Drama",
        language: "Hindi",
        imdb_rating: "7.2",
        age_rating: "UA",
        movie_image: "https://assets.bookmyshow.com/movies/jawan.jpg"
      },
      {
        title: "Salaar: Part 1 – Ceasefire",
        genre: "Action, Crime",
        language: "Telugu",
        imdb_rating: "7.5",
        age_rating: "A",
        movie_image: "https://assets.bookmyshow.com/movies/salaar.jpg"
      },
      {
        title: "Kantara",
        genre: "Drama, Action",
        language: "Kannada, Hindi",
        imdb_rating: "8.3",
        age_rating: "UA",
        movie_image: "https://assets.bookmyshow.com/movies/kantara.jpg"
      },
      {
        title: "Kaantha",
        genre: "Drama",
        language: "Tamil",
        imdb_rating: "N/A",
        age_rating: "UA",
        movie_image: "https://assets.bookmyshow.com/movies/kaantha.jpg"
      },

      // 🎥 Hollywood Movies
      {
        title: "Oppenheimer",
        genre: "Biography, Drama",
        language: "English",
        imdb_rating: "8.4",
        age_rating: "A",
        movie_image: "https://assets.bookmyshow.com/movies/oppenheimer.jpg"
      },
      {
        title: "Barbie",
        genre: "Comedy, Fantasy",
        language: "English",
        imdb_rating: "6.8",
        age_rating: "UA",
        movie_image: "https://assets.bookmyshow.com/movies/barbie.jpg"
      },
      {
        title: "Deadpool & Wolverine",
        genre: "Action, Comedy",
        language: "English",
        imdb_rating: "8.0",
        age_rating: "A",
        movie_image: "https://assets.bookmyshow.com/movies/deadpoolwolverine.jpg"
      },
      {
        title: "Dune: Part Two",
        genre: "Sci-Fi, Adventure",
        language: "English",
        imdb_rating: "8.9",
        age_rating: "UA",
        movie_image: "https://assets.bookmyshow.com/movies/dune2.jpg"
      },
      {
        title: "Spider-Man: Across the Spider-Verse",
        genre: "Animation, Action",
        language: "English",
        imdb_rating: "8.7",
        age_rating: "UA",
        movie_image: "https://assets.bookmyshow.com/movies/spiderverse2.jpg"
      },
      {
        title: "Avatar: The Way of Water",
        genre: "Sci-Fi, Adventure",
        language: "English",
        imdb_rating: "7.7",
        age_rating: "UA",
        movie_image: "https://assets.bookmyshow.com/movies/avatar2.jpg"
      }
    ]
  });

  console.log("🎬 Movies (Indian + Hollywood) seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
