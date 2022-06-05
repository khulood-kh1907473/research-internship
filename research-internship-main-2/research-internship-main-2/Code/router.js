import express from 'express';
import StudentService from "./service/student-service.js";
import * as usersServices from "./service/user-service.js";

const router = express.Router();
const studentService = new StudentService();

router.route('/students')
    .post(studentService.addStudent);

router.route('/students/:email')
    .put(studentService.updateStudent);

router.route("/users")
    .post(usersServices.readUser);

router.route("/survey-statistics")
    .get(studentService.getStats);

export default router;