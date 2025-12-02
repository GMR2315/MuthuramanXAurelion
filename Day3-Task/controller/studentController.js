
const z = require("zod")

const { fetchAllStudentService, fetchOneStudentService, createStudentService, updateStudentService, deleteStudentService }
    = require("../service/studentService")

const studentByIdSchema = z.object({
    roll_no: z.string(),
})
const studentCreateSchema = z.object({
    roll_no: z.string(),
    name: z.string(),
    class: z.string(),
    section: z.string(),
    dob: z.string(),
    phone_number: z.string(),
    image_url: z.string().url(),
    email: z.string().email().optional(),
});
const studentUpdateSchema = z.object({
    roll_no: z.string(),
    name: z.string(),
    class: z.string(),
    section: z.string(),
    dob: z.string(),
    phone_number: z.string(),
    image_url: z.string().url(),
    email: z.string().email().nullable()
})
const studentDeleteSchema = z.object({ roll_no: z.string() })

const fetchAllStudentController = async (req, res) => {
    // Data  from frontend

    //DB logic
    const db_data = await fetchAllStudentService()


    //Data to backend
    res.send(db_data);

}

const fetchOneStudentController = async (req, res) => {
    // Data  from frontend
    const { roll_no } = studentByIdSchema.parse(req.params);
    //DB logic
    const student = await fetchOneStudentService(roll_no)

    //Data to backend
    res.send(student);

}

const createStudentController = async (req, res) => {
    // 1. Data from Frontend
    const data = studentCreateSchema.parse(req.body);
    // 2. DB Logic
    const db_data = await createStudentService(data)
    // 3. Data to Frontend
    res.send(db_data);

};

const updateStudentController = async (req, res) => {
    // Data  from frontend
    const { roll_no } = studentByIdSchema.parse(req.params);
    const data = studentUpdateSchema.parse(req.body);
    //DB logic
    const db_data = await updateStudentService(roll_no, data)

    //Data to backend
    res.send(db_data);

};

const deleteStudentController = async (req, res) => {
    // Data from frontend
    const { roll_no } = studentDeleteSchema.parse(req.params);
    // DB logic
    const db_data = await deleteStudentService(roll_no)
    // Data to frontend 
    res.send("student data is  deleted");
};


module.exports = { fetchAllStudentController, fetchOneStudentController, createStudentController, updateStudentController, deleteStudentController }

