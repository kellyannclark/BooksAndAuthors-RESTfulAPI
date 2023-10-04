const express = require('express');
const bodyParser = require("body-parser");
const mongodb = require('./data/database');
const app = express();


const port = process.env.PORT || 3000; //set port

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Request-With, Content-type, Accept, Z-Key"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});
app.use("/", require("./routes"));  

mongodb.initDb((err) => {     //initializes MongoDB database connection and starts Node.js -
    if (err) {                //Express only if database initialization is successful (ensures apps 
        console.log(err);     //dependencies like database are properly set up before accepting incoming requests)
    } else {
        app.listen(port, () => {   //starts client
            console.log(`Database is listening, and node is running on port ${port}`);
        });
    }
});