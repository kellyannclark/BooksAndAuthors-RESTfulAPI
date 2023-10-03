const routes = require('express').Router();
const gospelBooksController = require('../controllers/gospelBooks');

routes.get('/', gospelBooksController.kellyRoute);

routes.get('/hannah', gospelBooksController.hannahRoute);

module.exports = routes;