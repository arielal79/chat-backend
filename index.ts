import * as express from "express";
import { firestore, rtdb  } from "./db";
import { json } from "body-parser";
import { v4 as uuidv4 } from "uuid";
import * as cors from "cors";

const port = 3000;
const app = express();

app.use(json());
app.use(cors());



app.post("/chatroom", function (req, res){
    const id = uuidv4();
    const chatRoomRef = rtdb.ref("/chatrooms/"+id);
    chatRoomRef.set({
        type:"chatroom"
    }, function (){
        res.json({
            id,
        });
    }
    );
   
});
app.post("/messages/", function (req, res){
    res.json(["todos los usuarios"]);
});


app.listen(port, ()=>{
    console.log('Example app Listening at http://localhost:${port}');
});
