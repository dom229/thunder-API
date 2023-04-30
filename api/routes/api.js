import { Router, json } from "express";
import User from '../../db/model/user.js';
// import xml from "xml";
import { xmlc } from "../utils/conveter.js";
import { newdata } from "../utils/objcreator.js";
const Api = Router();

Api.get("/", (req, res) => {
    res.send("Hello World");
});

Api.post('/post', async (req, res) => {
    if (req.query.type === "xml") {
        const user = await User(req.body.thunder.main);
        user.save()
        res.send("data is saved")

    } else {
        const user = await User(req.body);
        user.save()
            .then((result) => {
                res.send(result)
            }).catch((err) => {
                res.send(err)
            });
    }
});
Api.get('/get', async (req, res) => {
    if (req.query.type === "xml") {
        const Data = await User.find();
        res.set("Content-Type", "application/xml")
        res.send(xmlc({
            thunder: {
                main: newdata(Data)
            }
        }))
    } else {
        const Data = await User.find({});
        res.send(Data)
    }
});
Api.get(`/filter`, async (req, res) => {
    if (req.query.type === "xml") {
        const Data = await User.find(req.body);
        res.set("Content-Type", "application/xml")
        res.send(xmlc({
            thunder: {
                main: newdata(Data)
            }
        }))
    } else { 
        const Data = await User.find(req.query);
        res.send(Data)
    }
});
export default Api;