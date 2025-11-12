const { PrismaClient } = require("@prisma/client");
const express = require("express")
const prisma = new PrismaClient()

const app = express();

app.use(express.json());


//GET - http://localhost:3000/
app.get("/",(req,res) =>{
    res.send("API WORKING");
})

//GET - http://localhost:3000/students
app.get("/students",async (req,res) => {
    // Data  from frontend
    
    //DB logic
    const db_data = await prisma.student.findMany();
    
    
    //Data to backend
    res.send(db_data);
    
})

//GET - http://localhost:3000/students/:roll_no
app.get('/students/:roll_no', async (req, res) => {
    // Data  from frontend
  const roll_no = req.params.roll_no;
    //DB logic
     const student = await prisma.student.findUnique({
      where: { roll_no: roll_no },
    });
    
    //Data to backend
    res.send(student);

});


//POST - http://localhost:3000/students
app.post("/students",async(req,res) =>{
    // 1. Data from Frontend
    const data = req.body;
    // 2. DB Logic
    const db_data = await prisma.student.create({
        data: {
            roll_no: data.roll_no,
            name: data.name,
            class: data.class,
            section: data.section,
            dob: data.dob,
            phone_number: data.phone_number,
            image_url: data.image_url,
            },
        });
        // 3. Data to Frontend
        res.send(db_data);

});

app.listen(3000);