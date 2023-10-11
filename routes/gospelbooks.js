const express = require("express");
const router = express.Router();

const gospelBooksController = require("../controllers/gospelBooks");
const { isAuthenticated } = require("../middleware/authenticate");

// Get a single gospel book by ID
router.get("/:id", gospelBooksController.getSingle);

// Get all gospel books
router.get("/", gospelBooksController.getAll);

// Create a new gospel book in the database
router.post("/", isAuthenticated, gospelBooksController.createBook);

// Update a current gospel book in the database
router.put("/:id", isAuthenticated, gospelBooksController.updateBook);

// Delete a current gospel book from the database
router.delete("/:id", isAuthenticated, gospelBooksController.deleteBook);

module.exports = router;
