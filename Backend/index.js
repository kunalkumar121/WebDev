const express = require("express");
const app = express ();
let port = 8080;

app.use (express.urlencoded({extended: true}));
app.use (express.json());



app.get ("/register" , (req,res) => {
    let {user,password} =req.query;
    res.send (`stander Get responses . Wellcome : ${user}`);
});

app.post ("/register" , (req,res) => {
    let {user,password} =req.body;
    res.send (`stander Post responses Wellcome : ${user}`);
});
app.listen (port, () => {
    console.log(`listing the post : ${port}`);
});
