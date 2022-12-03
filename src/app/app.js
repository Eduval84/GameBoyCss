const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("Probando express");
    res.end;
})

app.listen(5500, () =>{
    console.log("------------Server runing on port 5500")
})