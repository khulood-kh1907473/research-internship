import mongoose from "mongoose";

const schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    grade: {
        type: Number,
        enum: [1,2,3,4,5,6,7,8,9,10,11,12],
        required: true,
    },
    question1: {
      type: String,
    },
    question2: {
        type: String,
    },
    question3: {
        type: String,
    },
    question4: {
        type: String,
    },
    question5: {
        type: String,
    },
    question6: {
        type: String,
    },
    question7: {
        type: String,
    },
    question8: {
        type: String,
    },
    question9: {
        type: String,
    },
    question10: {
        type: String,
    },
});

export default mongoose.model("Student", schema);