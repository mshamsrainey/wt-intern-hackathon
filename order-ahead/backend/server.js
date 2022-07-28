let http = require("http");
let express = require("express");
let fs = require("fs");
let app = express();
let path = require("path")
let process = require("process");
let bodyparser = require("body-parser");

const cors = require("cors");


let portNumber = process.argv[2]
app.listen(portNumber);
console.log(`Web server is running at http://localhost:${portNumber}`);
console.log("stop to shutdown the server: ");
process.stdin.resume();
process.stdin.on('readable', function () {
    let dataInput = process.stdin.read().toString();
    if (dataInput !== null) {
        let command = dataInput.trim();
        if (command === "stop") {
            console.log("Shutting down the server")
            process.exit(0);
        }
    }

    console.log("stop to shutdown the server: ");
});



// require("dotenv").config({ path: "./config.env" });
// const port = process.env.PORT || 5000;
// app.use(cors());
// app.use(express.json());
// app.use(require("./routes/record"));
// // get driver connection
// const dbo = require("./db/conn");
 
// app.listen(port, () => {
//   // perform a database connection when server starts
//   dbo.connectToServer(function (err) {
//     if (err) console.error(err);
 
//   });
//   console.log(`Server is running on port: ${port}`);
// });