import express from 'express';
import StudentService from "./service/student-service.js";
import * as usersServices from "./service/user-service.js";

const router = express.Router();
const studentService = new StudentService();

router.route('/student/:uuid')
    .get(studentService.getStudent)

router.route('/students')
    .get(studentService.getStudents)
    .post(studentService.addStudent);

router.route('/students/:uuid/survey')
    .put(studentService.updateStudentSurvey);

router.route('/students/:uuid/postsurvey')
    .put(studentService.updateStudentPostSurvey);

router.route('/students/:uuid/progress')
    .put(studentService.updateStudentProgress);

router.route('/students/:uuid/test')
    .put(studentService.updateStudentTest);

router.route("/users")
    .post(usersServices.readUser);

router.route("/survey-statistics")
    .get(studentService.getStats);

export default router;