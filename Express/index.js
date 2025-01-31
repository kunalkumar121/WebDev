const express = require ("express");
const app = express();


let port = 3000; //8080

app.listen(port ,() => {
    console.log (`app is listening on port ${port}`);
} );

// app.get ("/", (req , res) => {
//     res.send("you connected  root squre path");
// });


// app.get ("/:username", (req , res) => {
//     let {username} =  req.params;
//     res.send(`hello , iam kunal @ ${username}`);

// });

app.get ("/search" , (req, res) => {
    let {q} =req.query;
    res.send (` this was operate ${q}`);

});


// app.get ("/apple", (req , res) => {
//     res.send("you connected apple path");
// });

// app.get ("/orange", (req , res) => {
//     res.send("you connected orange  apple  path");
// });



// app.use((req,res) => {
//     // console.log(req);
//     console.log("new incomming request");
//     res.send("this is a basic responcse");
// });