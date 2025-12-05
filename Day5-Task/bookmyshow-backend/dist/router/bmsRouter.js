"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const BmsRouter = express_1.default.Router();
const bmsController_1 = require("../controller/bmsController");
//GET - http://localhost:3000/movies
BmsRouter.get("/movies", bmsController_1.fetchAllMoviesController);
//GET - http://localhost:3000/movies/:movie_id
BmsRouter.get("/movies/:movie_id", bmsController_1.fetchOneMovieController);
//POST - http://localhost:3000/movies
BmsRouter.post("/movies", bmsController_1.createMovieController);
//PUT - http://localhost:3000/movies/:movie_id
BmsRouter.put("/movies/:movie_id", bmsController_1.updateMovieController);
////PUT - http://localhost:3000/movies/:movie_id
BmsRouter.delete("/movies/:movie_id", bmsController_1.deleteMovieController);
exports.default = BmsRouter;
