const express = require("express")
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const morgan = require("morgan");
cors = require('cors')
const app = express();

//Third Party module
app.use(morgan('common'))
app.use(cors())
//Core module
app.use(express.json());
//custom module
const middleware = (req,res,next) => {
    console.log("middleware ran successfully");
    next();
}

//GET - http://localhost:3000/
app.get("/", middleware,(req, res) => {
    res.send("Movies")
});

//GET - http://localhost:3000/movies


app.get("/movies", async (req, res) => {
    try {
        // data from frontend
        //DB logic
        const db_data = await prisma.movie.findMany();

        // data to frontend
        res.status(200).json({ message: "movies fetched", data: db_data });
    }
    catch (err) {
        res.status(500).err({ message: "Internal server error", err: err })
    }
})



//GET - http://localhost:3000/movies/:movie_id


app.get("/movies/:movie_id", async (req, res) => {
    try {
        // data from frontend
        const { movie_id } = req.params;

        //DB logic
        const db_data = await prisma.movie.findUnique(
            {
                where: {
                    movie_id: movie_id
                }
            }
        )

        //data to frontend
        res.status(200).json({ message: "movie fetched", data: db_data })
    }
    catch (err) {
        res.status(500).json({ message: "Internal Server Error", err: err });

    }



});



//POST - http://localhost:3000/movies
app.post("/movies", async (req, res) => {
    try {
        //data from frontend
        const data = req.body;

        //DB logic
        const db_data = await prisma.movie.create({
            data: data
        })

        //data to frontend
        res.status(201).json({ message: "movie created", data: db_data });

    }
    catch (err) {
        res.status(500).json({ message: "Internal Server Error" }, err)

    }
})





//PUT - http://localhost:3000/movies/:movie_id

app.put("/movies/:movie_id", async (req, res) => {
    try {
        //data from frontend
        const {movie_id} =  req.params
        const data = req.body

        //DB logic
        const db_data = await prisma.movie.update({
            where:{
                movie_id : movie_id
            },
            data : data
        })
        console.log(db_data)
        res.status(200).json({messahge:"Movie Updated",data:db_data
        })

    }
    catch (err) {
        res.status(500).json({message:"Internal Server error",err:err})

    }
})

////PUT - http://localhost:3000/movies/:movie_id
app.delete("/movies/:movie_id",async(req,res) => {
    try{
        //data from frontend
        const {movie_id} = req.params

        //DB logic
        const db_data = await prisma.movie.delete({
            where : {
                movie_id:movie_id
            }

        })
        res.status(200).json({message:"Movie Deleted"})

    }
    catch(err) {
        res.status(404).json({message:"Not Found"});
    }
})






app.listen(3000, () => {
    console.log("Server running")
});