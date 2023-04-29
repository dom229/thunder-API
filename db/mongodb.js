import mongoose from "mongoose";
const db = (URI, Options) => {
    mongoose.connect(URI, Options)
        .then(() => {
            console.log("Connected to database");
        })
        .catch((err) => {
            console.log("Not connected to database", err);
        });

}
export default db;