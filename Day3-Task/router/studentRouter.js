const express = require("express")

const { fetchAllStudentController, fetchOneStudentController, createStudentController, updateStudentController, deleteStudentController } = require("../controller/studentController");

const StudentRouter = express.Router();

//GET - http://localhost:3000/students
StudentRouter.get("/students", fetchAllStudentController)

//GET - http://localhost:3000/students/:roll_no 
StudentRouter.get('/students/:roll_no', fetchOneStudentController);


//POST - http://localhost:3000/students
StudentRouter.post("/students", createStudentController);

//PUT - http://localhost:3000/students/:roll_no
StudentRouter.put('/students/:roll_no', updateStudentController);

StudentRouter.delete("/students/:roll_no", deleteStudentController);

module.exports = StudentRouter; 