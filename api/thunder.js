import express from 'express';
import dotenv from 'dotenv';
import db from "../db/mongodb.js"
dotenv.config();
db(process.env.URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        family: 4
    })

const app = express();
app.get('/post', (req, res) => {
    res.end("Hello World");
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})
