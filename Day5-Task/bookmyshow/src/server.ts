import express,{NextFunction, Request,Response} from "express";
import BmsRouter from "./router/bmsRouter"
import morgan from "morgan";
import cors from "cors"

const app = express();

//Third Party module
app.use(morgan('common'))
app.use(cors())
//Core module
app.use(express.json());
//custom module
const middleware = (req:Request, res:Response, next:NextFunction) => {
    console.log("middleware ran successfully");
    next();
}

//GET - http://localhost:3000/
app.get("/", middleware, (req:Request, res:Response) => {
    res.send("Movies")
});


app.use("/v1", BmsRouter)








app.listen(3000, () => {
    console.log("Server running")
});