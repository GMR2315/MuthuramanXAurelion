const express = require("express")
const BmsRouter = require("./router/bmsRouter")
const morgan = require("morgan");
cors = require('cors')
const app = express();

//Third Party module
app.use(morgan('common'))
app.use(cors())
//Core module
app.use(express.json());
//custom module
const middleware = (req, res, next) => {
    console.log("middleware ran successfully");
    next();
}

//GET - http://localhost:3000/
app.get("/", middleware, (req, res) => {
    res.send("Movies")
});


app.use("/v1", BmsRouter)








app.listen(3000, () => {
    console.log("Server running")
});