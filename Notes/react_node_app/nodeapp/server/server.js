const express = require("express");
const greet = require('../src/greetings');
const msg = require("../src/modules");

//create an instance of an express application
// used for routing ,middleware managment and many reasons to keep routing clean
const app = express();
// define the prot number the server will liste on 
const port = 3000;

//define a route for the https ger request to the root url ('/')
//req represents the request object, and res represents the response object
// means browser asking the server(so it request) to give msg hello node js its giving 
// back as response
// node:browser port 3000 is client

//get(req,res)
//here req belongs to client
//and res belong to server
app.get('/',(req,res) => {
    res.send('hello, Node.js!');
});

//use the costum module
app.get('/greet',(req,res) => {
    greet();
    res.send('Check the server console for greeting massage!');
});

//use the costum msg module
app.get('/msg',(req,res) => {
    msg();
    res.send('Check the server console for msg massage!');
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});



// const express = require("express");
// const cors = require('cors'); // to handle co
// const app = express();
// const port = 3000;
// //Middleware
// app.use(cors());
// app.use(express.jason());

// //define a route to server data
// app.get('/api/data',(req, res) => {
//     res.jason({message:'Hello, this is data from the server!'});
// });

// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });

