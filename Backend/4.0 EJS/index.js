import express from "express";

const app = express();
const port = 3000;

const date = new Date();
var day = date.getDay();

var isWeekday=true;

function CalculateDay()
{
    if (day === 0 || day ===6){
        isWeekday=false
    }
}

app.listen(port, ()=>{
    console.log(`listening on port number ${port}`);
});

app.get("/", (req,res)=>{

    let type = "a weekday";
    let sentence = "it's time to work hard!";
    
    CalculateDay();


    if(!isWeekday){
        type = "the weekend";
        sentence = "it's time to have fun!";
    }
    res.render("index.ejs", {
        dayType: type,
        advice: sentence,
    });
});