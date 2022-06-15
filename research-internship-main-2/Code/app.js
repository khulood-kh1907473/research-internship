import express from 'express';
import morgan from 'morgan';
import cors from "cors";
import router from './router.js';
import mongoose from "mongoose";
import Student from "./models/student.js";


const port = process.env.PORT || 3434;
const app = express();

// const duri = `mongodb+srv://shadowomizi:qaIC1MvsrU4aUCOv@projects.o8ea3.mongodb.net/?retryWrites=true&w=majority`;
// let uri = process.env.MONGODB_URI || duri;
// mongoose.connect (uri, async function(error) {
//    if(error){
//       console.log(error);
//    }
// });
mongoose.connect("mongodb://localhost:27017/students", function(error){
   console.error(error);
});


app.use(cors());
app.use(morgan('tiny'));
app.use(express.static('public'));
app.use(express.json());
app.use('/api', router);

app.get("/", (req, res) => {
   res.sendFile('public/login.html', { root: '.' });
});

app.listen(port, () => console.log(`server listening on http://localhost:${port}`));
