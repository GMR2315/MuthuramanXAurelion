const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()

const fetchAllStudentService = async () => {
    return await prisma.student.findMany({
        orderBy: {
            roll_no: 'asc'
        }
    });


};

const fetchOneStudentService = async (roll_no) => {
    return await prisma.student.findUnique({
        where: { roll_no: roll_no },
    });


}

const createStudentService = async (data) => {
    return await prisma.student.create({
        data: {
            roll_no: data.roll_no,
            name: data.name,
            class: data.class,
            section: data.section,
            dob: data.dob,
            phone_number: data.phone_number,
            image_url: data.image_url,
            email: data.email,
        },
    });


}

const updateStudentService = async (roll_no,data) => {
    return await prisma.student.update({
        where: {
            roll_no: roll_no,
        },
        data: {
            roll_no: data.roll_no,
            class: data.class,
            name: data.name,
            section: data.section,
            DOB: data.DOB,
            phone_number: data.phone_number,
            image_url: data.image_url,
            email: data.email
        },
    });


}

const deleteStudentService = async (roll_no) => {
    return await prisma.student.delete({
        where: {
            roll_no: roll_no,
        },
    });


}

module.exports = { fetchAllStudentService, fetchOneStudentService, createStudentService, updateStudentService, deleteStudentService }