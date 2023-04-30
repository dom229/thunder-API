import express from 'express';
import dotenv from 'dotenv';
import db from "../db/mongodb.js"
import Api from "./routes/api.js";
import xmlparser from 'express-xml-bodyparser';
dotenv.config(); // Load .env file
const app = express(); // Initialize express
const Options={
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4
}
db(process.env.URI,Options)
app.use(express.json());
app.use(xmlparser({explicitArray: false}))
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.use('/api', Api);



 





app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})
