const express = require('express');
const app = express();
const gospelBooksController = require('./controllers/gospelBooks');

app.get('/', gospelBooksController.kellyRoute);

app.get('/hannah', gospelBooksController.hannahRoute);

const port = 3000;

app.listen(process.env.port || port);
console.log("Web Server is listening at port " + (process.env.port || port));
