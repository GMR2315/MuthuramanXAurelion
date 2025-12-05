import { Request, Response } from "express";
import {z} from "zod"
import { fetchAllMoviesService, fetchOneMovieService, createMovieService, updateMovieService, deleteMovieService } from "../service/bmsService";

 const movieByIdSchema = z.object({
    movie_id: z.string(), 
});

 const movieCreateSchema = z.object({
    title: z.string(),
    genre: z.array(z.string()),
    language: z.enum(["Tamil", "English", "Telugu", "Hindi"]),
    imdb_rating: z.string(),
    certificate: z.enum(["A", "UA"]),
    movie_image: z.string().url(),
});

 const movieUpdateSchema = z.object({
    title: z.string(),
    genre: z.array(z.string()),
    language: z.enum(["Tamil", "English", "Telugu", "Hindi"]),
    imdb_rating: z.string(),
    certificate: z.enum(["A", "UA"]),
    movie_image: z.string().url(),
});

const movieDeleteSchema = z.object({
    movie_id: z.string(),
});


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
        const { movie_id } = movieByIdSchema.parse(req.params);

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
        const data = movieCreateSchema.parse(req.body);

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
        const data = movieUpdateSchema.parse(req.body)

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
        const { movie_id } = movieDeleteSchema.parse(req.params)

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


