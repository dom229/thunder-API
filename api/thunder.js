import express from 'express';
import dotenv from 'dotenv';
import db from "../db/mongodb.js"
import User from '../db/model/user.js';
dotenv.config(); // Load .env file
const app = express(); // Initialize express
const Options={
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4
}
// Connect to database
db(process.env.URI,Options) 
// Set view engine
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Set view engine
app.get('/', async(req, res) => {
    res.sendFile(process.cwd()+"/public/index.html")
});

app.post('/post', async(req, res) => {
   const user = await User(req.body);
    user.save()
    .then((result) => {
        res.send(result)
    }).catch((err) => { 
        res.send(err)
    });
}); 
app.get('/get/:email', async(req, res) => {
 const resuser = req.params.email;
 const data = User.find(({email:resuser}));
console.log(data)
});
// Start server
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})
