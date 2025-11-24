const express = require("express")
const BmsRouter = express.Router();

const  { fetchAllMoviesController, fetchOneMovieController, createMovieController, updateMovieController, deleteMovieController } = require("../controller/bmsController")

//GET - http://localhost:3000/movies
BmsRouter.get("/movies", fetchAllMoviesController)



//GET - http://localhost:3000/movies/:movie_id


BmsRouter.get("/movies/:movie_id", fetchOneMovieController);



//POST - http://localhost:3000/movies
BmsRouter.post("/movies", createMovieController)





//PUT - http://localhost:3000/movies/:movie_id

BmsRouter.put("/movies/:movie_id", updateMovieController)

////PUT - http://localhost:3000/movies/:movie_id
BmsRouter.delete("/movies/:movie_id", deleteMovieController)

module.exports = BmsRouter