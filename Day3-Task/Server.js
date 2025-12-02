
const express = require("express")
const StudentRouter = require("./router/studentRouter")

const app = express();

app.use(express.json());



//GET - http://localhost:3000/
app.get("/", (req, res) => {
    res.send("API WORKING");
})

app.use("/v1", StudentRouter);



app.listen(3000);
