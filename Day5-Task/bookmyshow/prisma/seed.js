const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {

  // ⭐ Helper Function: Create Movie with Details + a Show
  async function createMovie(data) {
    const movie = await prisma.movie.create({
      data: {
        title: data.title,
        genre: data.genre,
        language: data.language,
        imdb_rating: data.imdb_rating,
        certificate: data.certificate,
        movie_image: data.movie_image,
      },
    });

    // Movie Details
    await prisma.movieDetails.create({
      data: {
        director: data.director,
        actor: data.actor,
        music: data.music,
        producer: data.producer,
        story: data.story,
        movie_id: movie.movie_id,
      },
    });

    // One sample show
    await prisma.show.create({
      data: {
        start_time: new Date("2025-02-20T10:00:00"),
        date: new Date("2025-02-20"),
        price: data.price,
        language: data.language,
        movie_id: movie.movie_id,
      },
    });

    return movie;
  }

  // -------------------------------------------------------
  // ⭐ Tamil Movies
  // -------------------------------------------------------
  await createMovie({
    title: "Kaantha",
    genre: ["Action", "Thriller"],
    language: "Tamil",
    imdb_rating: "8.3",
    certificate: "UA",
    movie_image:
      "https://upload.wikimedia.org/kaantha.jpg",

    director: "Lokesh Kanagaraj",
    actor: ["Suriya", "Jagapathi Babu"],
    music: "Anirudh",
    producer: ["Seven Screen Studio"],
    story: ["Revenge", "Village backdrop", "Mass entertainment"],

    price: 180,
  });

  await createMovie({
    title: "Vikram",
    genre: ["Action", "Crime"],
    language: "Tamil",
    imdb_rating: "8.4",
    certificate: "UA",
    movie_image:
      "https://upload.wikimedia.org/vikram.jpg",

    director: "Lokesh Kanagaraj",
    actor: ["Kamal Haasan", "Vijay Sethupathi", "Fahadh Faasil"],
    music: "Anirudh",
    producer: ["Raaj Kamal Films"],
    story: ["Undercover mission", "Drug mafia"],

    price: 200,
  });

  await createMovie({
    title: "Leo",
    genre: ["Action", "Drama"],
    language: "Tamil",
    imdb_rating: "7.9",
    certificate: "UA",
    movie_image:
      "https://upload.wikimedia.org/leo.jpg",

    director: "Lokesh Kanagaraj",
    actor: ["Vijay", "Trisha"],
    music: "Anirudh",
    producer: ["Seven Screen Studio"],
    story: ["Past secrets", "Family drama", "Action thriller"],

    price: 220,
  });

  // -------------------------------------------------------
  // ⭐ Hollywood Movies
  // -------------------------------------------------------
  await createMovie({
    title: "Inception",
    genre: ["Sci-Fi", "Thriller"],
    language: "English",
    imdb_rating: "8.8",
    certificate: "UA",
    movie_image:
      "https://upload.wikimedia.org/inception.jpg",

    director: "Christopher Nolan",
    actor: ["Leonardo DiCaprio", "Tom Hardy", "Elliot Page"],
    music: "Hans Zimmer",
    producer: ["Syncopy"],
    story: ["Dream invasion", "Mind control", "Heist"],

    price: 250,
  });

  await createMovie({
    title: "Interstellar",
    genre: ["Sci-Fi", "Drama"],
    language: "English",
    imdb_rating: "8.6",
    certificate: "UA",
    movie_image:
      "https://upload.wikimedia.org/interstellar.jpg",

    director: "Christopher Nolan",
    actor: ["Matthew McConaughey", "Anne Hathaway"],
    music: "Hans Zimmer",
    producer: ["Syncopy", "Legendary Pictures"],
    story: ["Space exploration", "Time dilation", "Family bond"],

    price: 280,
  });

  await createMovie({
    title: "Avengers: Endgame",
    genre: ["Action", "Sci-Fi"],
    language: "English",
    imdb_rating: "8.4",
    certificate: "UA",
    movie_image:
      "https://upload.wikimedia.org/endgame.jpg",

    director: "Russo Brothers",
    actor: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
    music: "Alan Silvestri",
    producer: ["Marvel Studios"],
    story: ["Time travel", "Universe fight", "Sacrifice"],

    price: 300,
  });

  console.log("🎉 Seeding Complete!");
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    return prisma.$disconnect();
  });
