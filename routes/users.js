const express = require("express");
const router = express.Router();

const gospelBooksController = require("../controllers/gospelBooks"); 

router.get("/:id", gospelBooksController.getSingle); //get request that gets single user by id:

router.get("/", gospelBooksController.getAll); //get request that gets all gospelbooks from route

router.post("/", gospelBooksController.createBook); //post to create a new gospel book in the database

router.put("/:id", gospelBooksController.updateBook); //update a current gospel book in the database

router.delete("/:id", gospelBooksController.deleteBook); //delete a current gospel book in the database

module.exports = router;