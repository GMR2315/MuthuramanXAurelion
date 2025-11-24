

const { fetchAllMoviesService, fetchOneMovieService, createMovieService, updateMovieService, deleteMovieService } = require("../service/bmsService");


const fetchAllMoviesController = async (req, res) => {
    try {
        // data from frontend
        //DB logic
        const db_data = await fetchAllMoviesService()

        // data to frontend
        res.status(200).json({ message: "movies fetched", data: db_data });
    }
    catch (err) {
        res.status(500).json({ message: "Internal server error", err: err })
    }
}

const fetchOneMovieController = async (req, res) => {
    try {
        // data from frontend
        const { movie_id } = req.params;

        //DB logic
        const db_data = await fetchOneMovieService(movie_id)

        //data to frontend
        res.status(200).json({ message: "movie fetched", data: db_data })
    }
    catch (err) {
        res.status(500).json({ message: "Internal Server Error", err: err });

    }



}

const createMovieController = async (req, res) => {
    try {
        //data from frontend
        const data = req.body;

        //DB logic
        const db_data = await createMovieService(data)

        //data to frontend
        res.status(201).json({ message: "movie created", data: db_data });

    }
    catch (err) {
        res.status(500).json({ message: "Internal Server Error", err: err.message })

    }
}

const updateMovieController = async (req, res) => {
    try {
        //data from frontend
        const { movie_id } = req.params
        const data = req.body

        //DB logic
        const db_data = await updateMovieService(movie_id,data)

    }
    catch (err) {
        res.status(500).json({ message: "Internal Server error", err: err })

    }
}

const deleteMovieController = async (req, res) => {
    try {
        //data from frontend
        const { movie_id } = req.params

        //DB logic
        const db_data = await deleteMovieService()
        res.status(200).json({ message: "Movie Deleted" })

    }
    catch (err) {
        console.error("DELETE ERROR:", err); // shows full Prisma error in console

        // Prisma specific error when record does not exist
        if (err.code === "P2025") {
            return res.status(404).json({ message: "Movie not found" });
        }

        // Any other unexpected error
        res.status(500).json({
            message: "Internal server error",
            error: err.message,
        });
    }
}

module.exports = { fetchAllMoviesController, fetchOneMovieController, createMovieController, updateMovieController, deleteMovieController }