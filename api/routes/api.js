import { Router, json } from "express";
import User from '../../db/model/user.js';
// import xml from "xml";
import { xmlc } from "../utils/conveter.js";
import { newdata } from "../utils/objcreator.js";
const Api = Router();

Api.get("/", (req, res) => {
    res.send("hello this is api"); 
});

Api.post('/post', async (req, res) => {

    const user = await User((req.query.type === "xml") ? req.body.thunder.main : req.body);
    user.save()
    .then((result) => {
        res.send(result)
    }).catch((err) => { 
        res.send(err)
    });
});
Api.get('/get', async (req, res) => {
    const Data = await User.find({});
    if (req.query.type === "xml") {
        res.set("Content-Type", "application/xml")
        res.send(xmlc({
            thunder: {
                main: newdata(Data)
            }
        }))
    } else {
        res.send(Data)
    }
});
Api.get(`/filter`, async (req, res) => {
    const Data = await User.find((req.query.type === "xml")?req.body:req.query);
    if (req.query.type === "xml") {
        res.set("Content-Type", "application/xml")
        res.send(xmlc({
            thunder: {
                main: newdata(Data)
            }
        }))
    } else {
        res.send(Data)
    }
});
export default Api;