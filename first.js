console.log("KG coding is the best")


const fs = require('fs');

fs.writeFile("output.txt","Writing File",(err) =>{
    if (err) console.log("Error occurred");
    else console.log('File Written Successfully');
})

