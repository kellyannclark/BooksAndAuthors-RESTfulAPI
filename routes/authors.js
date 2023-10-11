const express = require("express");
const router = express.Router();

const authorsController = require("../controllers/authors");
const { isAuthenticated } = require("../middleware/authenticate");

// Get a single author by ID
router.get("/:id", authorsController.getAuthor);

// Get all authors
router.get("/", authorsController.getAuthors);

// Create a new author in the database
router.post("/", isAuthenticated, authorsController.createAuthor);

// Update a current author in the database
router.put("/:id", isAuthenticated, authorsController.updateAuthor);

// Delete a current author in the database
router.delete("/:id", isAuthenticated, authorsController.deleteAuthor);

module.exports = router;
