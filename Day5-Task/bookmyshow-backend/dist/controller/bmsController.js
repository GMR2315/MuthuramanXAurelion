"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMovieController = exports.updateMovieController = exports.createMovieController = exports.fetchOneMovieController = exports.fetchAllMoviesController = void 0;
const bmsService_1 = require("../service/bmsService");
const fetchAllMoviesController = async (req, res) => {
    try {
        // data from frontend
        //DB logic
        const db_data = await (0, bmsService_1.fetchAllMoviesService)();
        // data to frontend
        res.status(200).json({ message: "movies fetched", data: db_data });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Internal server error",
        });
    }
};
exports.fetchAllMoviesController = fetchAllMoviesController;
const fetchOneMovieController = async (req, res) => {
    try {
        // data from frontend
        const { movie_id } = req.params;
        //DB logic
        const db_data = await (0, bmsService_1.fetchOneMovieService)(movie_id);
        //data to frontend
        if (!db_data) {
            res.status(200).json({ message: "movie does not exist" });
            return;
        }
        res.status(200).json({ message: "movie fetched", data: db_data });
    }
    catch (err) {
        res.status(500).json({ message: "Internal Server Error", err: err });
    }
};
exports.fetchOneMovieController = fetchOneMovieController;
const createMovieController = async (req, res) => {
    try {
        //data from frontend
        const data = req.body;
        //DB logic
        const db_data = await (0, bmsService_1.createMovieService)(data);
        //data to frontend
        res.status(201).json({ message: "movie created", data: db_data });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Internal server error",
        });
    }
};
exports.createMovieController = createMovieController;
const updateMovieController = async (req, res) => {
    try {
        //data from frontend
        const { movie_id } = req.params;
        const data = req.body;
        //DB logic
        const db_data = await (0, bmsService_1.updateMovieService)(movie_id, data);
        //data frontend
        res.status(201).json({ message: "movie updated", data: db_data });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Internal server error",
        });
    }
};
exports.updateMovieController = updateMovieController;
const deleteMovieController = async (req, res) => {
    try {
        //data from frontend
        const { movie_id } = req.params;
        //DB logic
        const db_data = await (0, bmsService_1.deleteMovieService)(movie_id);
        //Data to frontend
        res.status(200).json({ message: "Movie Deleted" });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Internal server error",
        });
    }
};
exports.deleteMovieController = deleteMovieController;
