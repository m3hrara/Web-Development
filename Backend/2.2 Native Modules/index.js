const fs = require("fs");

fs.writeFile("newMessage.txt", "heyo from node", (err)=>{
    if(err) throw err;
    console.log("file has been saved");
});

fs.readFile("./message.txt","utf-8", (err, data) =>{
    if(err) throw err;
    console.log(data);
});