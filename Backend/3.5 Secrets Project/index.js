//The password is ILoveProgramming
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import bodyParser from "body-parser";

var password = "ILoveProgramming";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.post("/check", (req,res)=>{
    if(req.body.password === password)
    {
        res.sendFile(__dirname + "/public/secret.html");
    }
    else{
        res.sendFile(__dirname + "/public/index.html");
    }
});