import { Request, Response } from "express";


import { fetchAllMoviesService, fetchOneMovieService, createMovieService, updateMovieService, deleteMovieService } from "../service/bmsService";


const fetchAllMoviesController = async (req: Request, res: Response): Promise<void> => {
    try {
        // data from frontend
        //DB logic
        const db_data = await fetchAllMoviesService()

        // data to frontend

        res.status(200).json({ message: "movies fetched", data: db_data });
    }
    catch (err: unknown) {

        console.error(err);

        res.status(500).json({
            message: "Internal server error",
        });
    }

}

const fetchOneMovieController = async (req: Request<{movie_id :string}>, res: Response): Promise<void> => {
    try {
        // data from frontend
        const { movie_id } = req.params;

        //DB logic
        const db_data = await fetchOneMovieService(movie_id)

        //data to frontend
        if (!db_data) {
            res.status(200).json({ message: "movie does not exist" });
            return;
        }
        res.status(200).json({ message: "movie fetched", data: db_data })
    }
    catch (err: unknown) {
        res.status(500).json({ message: "Internal Server Error", err: err });

    }



}

const createMovieController = async (req: Request, res: Response): Promise<void> => {
    try {
        //data from frontend
        const data = req.body;

        //DB logic
        const db_data = await createMovieService(data)

        //data to frontend
        res.status(201).json({ message: "movie created", data: db_data });

    }
    catch (err: unknown) {

        console.error(err);

        res.status(500).json({
            message: "Internal server error",
        });
    }
}

const updateMovieController = async (req: Request<{movie_id :string}>, res: Response): Promise<void> => {
    try {
        //data from frontend
        const { movie_id } = req.params
        const data = req.body

        //DB logic
        const db_data = await updateMovieService(movie_id, data)

        //data frontend
        res.status(201).json({ message: "movie updated", data: db_data });

    }
    catch (err: unknown) {

        console.error(err);

        res.status(500).json({
            message: "Internal server error",
        });
    }
}

const deleteMovieController = async (req: Request<{movie_id :string}>, res: Response): Promise<void> => {
    try {
        //data from frontend
        const { movie_id } = req.params

        //DB logic
        const db_data = await deleteMovieService(movie_id);
        //Data to frontend
        res.status(200).json({ message: "Movie Deleted" })

    }
    catch (err: unknown) {

        console.error(err);

        res.status(500).json({
            message: "Internal server error",
        });
    }
}

export {
    fetchAllMoviesController,
    fetchOneMovieController,
    createMovieController,
    updateMovieController,
    deleteMovieController
};


