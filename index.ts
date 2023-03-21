import * as express from "express";
import { firestore, rtdb  } from "./db";
import { json } from "body-parser";
import { v4 as uuidv4 } from "uuid";
import * as cors from "cors";

const port = 3000;
const app = express();

app.use(json());
app.use(cors());



app.post("/messages", function (req, res){
    const chatRoomRef = rtdb.ref("/chatrooms/general/messages");
    chatRoomRef.push(req.body, function() {
        res.json("todo ok");
    });

   
  


//app.post("/messages/", function (req, res){
//    res.json(["todos los usuarios"]);
});


app.listen(port, ()=>{
    console.log(`Example app Listening at http://localhost:${port}`);
});
