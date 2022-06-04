import mongoose from "mongoose";
import Student from "../models/student.js";
import Users from "../models/users.js";
import fs from "fs-extra";

export default class StudentRepo {
    async initialize() {
        try {
            const hostname = "localhost";
            const port = "27017";
            const database = "students";
            const uri = `mongodb://${hostname}:${port}/${database}`;

            mongoose.connect(uri, async function(error) {
                if (error) {
                    console.error(error);
                }
            });

            await Users.deleteMany(); //initalize teacher login details
            try {
                const data = await fs.readJSON(`./public/data/users.json`);
                data.forEach(async (element) => {
                    await Users.create(element);
                });
            } catch (error) {
                console.log("Error initialising", Users);
                console.log(error);
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    async addStudent(student){
        await Student.create(student);
    }

    async updateStudent(email, answer){
        try{
            return await Student.updateOne({email},{
                question1: answer.question1,
                question2: answer.question2,
                question3: answer.question3,
                question4: answer.question4,
                question5: answer.question5,
                question6: answer.question6,
                question7: answer.question7,
                question8: answer.question8,
                question9: answer.question9,
                question10: answer.question10
            });
        }
        catch (e) {
            console.log(e);
        }
    }

    async getStats(){

        const count = await Student.aggregate([
            { $group: { _id: "$_v", count: { $sum: 1 } } },
        ]);

        const q1 = await Student.aggregate([
            { $group: { _id: "$question1", count: { $sum: 1 } } },
        ]);
        const q2 = await Student.aggregate([
            { $group: { _id: "$question2", count: { $sum: 1 } } },
        ]);
        const q3 = await Student.aggregate([
            { $group: { _id: "$question3", count: { $sum: 1 } } },
        ]);
        const q4 = await Student.aggregate([
            { $group: { _id: "$question4", count: { $sum: 1 } } },
        ]);
        const q5 = await Student.aggregate([
            { $group: { _id: "$question5", count: { $sum: 1 } } },
        ]);
        const q6 = await Student.aggregate([
            { $group: { _id: "$question6", count: { $sum: 1 } } },
        ]);
        const q7 = await Student.aggregate([
            { $group: { _id: "$question7", count: { $sum: 1 } } },
        ]);
        const q8 = await Student.aggregate([
            { $group: { _id: "$question8", count: { $sum: 1 } } },
        ]);
        const q9 = await Student.aggregate([
            { $group: { _id: "$question9", count: { $sum: 1 } } },
        ]);
        const q10 = await Student.aggregate([
            { $group: { _id: "$question10", count: { $sum: 1 } } },
        ]);

        return {count, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10};
}
}