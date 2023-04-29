import { Router} from "express";
import User from '../../db/model/user.js';
import xml  from "xml";
const Api = Router();

Api.get("/", (req, res) => {
    res.send("Hello World");
});

Api.post('/post', async (req, res) => {
    if(req.query.type==="xml"){
        const user = await User(req.body.root);
        user.save()
        res.send("Data Saved")
    }else{
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
    if(req.query.type==="xml"){
        const Data = await User.find({});
        res.set("Content-Type","application/xml")
        res.send(xml({
            thunder:[
                {fullname:Data[0].fullname},
                {email:Data[0].email},
                {password:Data[0].password},
                {gendar:Data[0].gendar},
                {dob:Data[0].dob},
        ]
        },{declaration:true}))
    }else{
    const Data = await User.find({});
    res.send(Data)
    }
});
Api.get(`/filter`, async (req, res) => {
    if(req.query.type==="xml"){
        const Data = await User.find(req.body);
        res.set("Content-Type","application/xml")
        res.send(xml({
            thunder:[
                {fullname:Data[0].fullname},
                {email:Data[0].email},
                {password:Data[0].password},
                {gendar:Data[0].gendar},
                {dob:Data[0].dob}
        ]
        },{declaration:true}))
    }else{
    const Data = await User.find(req.query);
    res.send(Data)
    }
});
export default Api;