const express = require("express")

const { fetchAllStudentService, fetchOneStudentService, createStudentService, updateStudentService, deleteStudentService }
 = require("../service/studentService")

const fetchAllStudentController = async (req, res) => {
    // Data  from frontend

    //DB logic
    const db_data =await fetchAllStudentService()


    //Data to backend
    res.send(db_data);

}

const fetchOneStudentController = async (req, res) => {
    // Data  from frontend
    const roll_no = req.params.roll_no; 
    //DB logic
    const student = await fetchOneStudentService(roll_no)

    //Data to backend
    res.send(student);

}

const createStudentController = async (req, res) => {
    // 1. Data from Frontend
    const data = req.body;
    // 2. DB Logic
   const db_data = await createStudentService(data)
    // 3. Data to Frontend
    res.send(db_data);

};

const updateStudentController = async (req, res) => {
    // Data  from frontend
    const roll_no = req.params.roll_no;
    const data = req.body;
    //DB logic
    const db_data = await updateStudentService(roll_no,data)

    //Data to backend
    res.send(db_data);

};

const deleteStudentController = async (req, res) => {
    // Data from frontend
    const { roll_no } = req.params;
    // DB logic
    const db_data = await deleteStudentService(roll_no)
    // Data to frontend 
    res.send("student data is  deleted");
};


module.exports = { fetchAllStudentController, fetchOneStudentController, createStudentController, updateStudentController, deleteStudentController }

