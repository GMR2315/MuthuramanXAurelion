# 🎬 BookMyShow Backend (TypeScript + Express + Prisma)

A backend mini-project that simulates core features of BookMyShow — including movie creation, updating, deletion, and fetching — built with modern tools like **TypeScript**, **Express**, **Prisma**, and **PostgreSQL**.

---

## 🚀 Tech Stack

| Layer | Technology |
|------|------------|
| Language | **TypeScript** |
| Framework | **Express.js** |
| ORM | **Prisma** |
| Database | **PostgreSQL** |
| Logger | Morgan |
| CORS | Enabled via cors middleware |

---

## 📂 Project Structure

```
bookmyshow/
│── prisma/
│   ├── schema.prisma
│── src/
│   ├── controller/
│   │   └── bmsController.ts
│   ├── router/
│   │   └── bmsRouter.ts
│   ├── service/
│   │   └── bmsService.ts
│   ├── server.ts
│── dist/ (auto-generated TS build)
│── package.json
│── tsconfig.json
│── .env
```

---

## 🛢️ Database Schema (Prisma ORM)

### 🎬 Movie

```prisma
model Movie {
  movie_id      String        @id @default(cuid())
  title         String
  genre         String[]
  language      Language
  imdb_rating   String
  certificate   Certificate
  movie_image   String
  movie_details MovieDetails?
  show          Show[]
}
```

### 🎭 MovieDetails

```prisma
model MovieDetails {
  moviedetails_id String   @id @default(uuid())
  director        String
  actor           String[]
  music           String
  producer        String[]
  story           String[]
  movie_id        String   @unique
  movie           Movie    @relation(fields: [movie_id], references: [movie_id])
}
```

### 🎟️ Show

```prisma
model Show {
  show_id    String   @id @default(cuid())
  start_time DateTime
  date       DateTime
  price      Float
  language   Language
  created_at DateTime @default(now())
  updated_at DateTime @updatedAt
  movie_id   String
  movie      Movie    @relation(fields: [movie_id], references: [movie_id])
}
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repo

```sh
git clone https://github.com/GMR2315/MuthuramanXAurelion
cd cd MuthuramanXAurelion/Day5-Task/bookmyshow-backend
```

### 2️⃣ Install dependencies

```sh
npm install
```

### 3️⃣ Configure `.env`

```
DATABASE_URL="postgresql://user:password@localhost:5432/bookmyshow"
```

### 4️⃣ Run Prisma migrations

```sh
npx prisma migrate dev
```

### 5️⃣ Start the development server

```sh
npm run dev
```

Server starts at:

```
http://localhost:3000
```

---

## 🔥 API Endpoints

### 🎬 Movies

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/v1/movies` | Get all movies |
| GET | `/v1/movies/:movie_id` | Get a movie by ID |
| POST | `/v1/movies` | Create a movie |
| PUT | `/v1/movies/:movie_id` | Update a movie |
| DELETE | `/v1/movies/:movie_id` | Delete a movie |

---

## 🧠 Project Highlights

✔ TypeScript file structuring  
✔ Converting JS → TS  
✔ Prisma ORM with TypeScript  
✔ MVC-style architecture (controller, router, service)  
✔ Error handling  
✔ Express middleware in TS  
✔ Environment variable configuration  

---

## 📦 Build for Production

```sh
npm run build
npm start
```

---

## 🛠️ Future Enhancements

- Add **authentication (JWT)**
- Implement pagination + filtering
- Add show bookings model
- Upload movie images to cloud storage

---

## ⭐ Give it a star!

If this project helped you learn Express + TypeScript + Prisma, consider starring the repo!

