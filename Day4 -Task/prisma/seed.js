const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.restaurant.createMany({
    data: [
      {
        restaurant_title: "The Spice Hub",
        rating: 4.3,
        delivery_time: "30 mins",
        location: "Anna Nagar, Chennai",
        cuisines: "North Indian, Biryani",
        image: "https://example.com/spicehub.jpg"
      },
      {
        restaurant_title: "Burger Palace",
        rating: 4.5,
        delivery_time: "25 mins",
        location: "Velachery, Chennai",
        cuisines: "Fast Food, Burgers",
        image: "https://example.com/burgerpalace.jpg"
      },
      {
        restaurant_title: "Hot & Roll Shawarma",
        rating: 4.1,
        delivery_time: "20 mins",
        location: "T Nagar, Chennai",
        cuisines: "Arabian, Shawarma",
        image: "https://example.com/shawarma.jpg"
      },
      {
        restaurant_title: "Sushi Street",
        rating: 4.7,
        delivery_time: "40 mins",
        location: "Adyar, Chennai",
        cuisines: "Japanese, Sushi",
        image: "https://example.com/sushi.jpg"
      },
      {
        restaurant_title: "Dosa Junction",
        rating: 4.2,
        delivery_time: "15 mins",
        location: "Kodambakkam, Chennai",
        cuisines: "South Indian",
        image: "https://example.com/dosa.jpg"
      },
      {
        restaurant_title: "Chinese Wok Express",
        rating: 4.0,
        delivery_time: "35 mins",
        location: "Nungambakkam, Chennai",
        cuisines: "Chinese, Asian",
        image: "https://example.com/chinese.jpg"
      },
      {
        restaurant_title: "Creamy Delights",
        rating: 4.6,
        delivery_time: "18 mins",
        location: "Besant Nagar, Chennai",
        cuisines: "Desserts, Ice Cream",
        image: "https://example.com/icecream.jpg"
      }
    ]
  });

  console.log("🌱 Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
