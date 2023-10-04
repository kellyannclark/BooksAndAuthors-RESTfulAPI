
const express = require("express");
const router = express.Router();
const mongodb = require("../data/database");
const ObjectId = require("mongodb").ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=["Gospelbooks"]
    const result = await mongodb.getDatabase().db().collection("gospelbooks").find();
    result.toArray().then((gospelbooks) => {
       res.setHeader("Content-Type", "application/json");
       res.status(200).json(gospelbooks);
    });
}

const getSingle = async (req, res) => {
    //#swagger.tags=["Gospelbooks"]
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection("gospelbooks").find({_id: userId});
    result.toArray().then((gospelbooks) => {
       res.setHeader("Content-Type", "application/json");
       res.status(200).json(gospelbooks[0]);
    });
}
const createBook = async (req, res) => {
    //#swagger.tags=["Gospelbooks"]
    const book = {
        title: req.body.title,
        author: req.body.author,
        pages: parseInt(req.body.pages),
        topic: req.body.topic
    };

    const response = await mongodb.getDatabase().db().collection("gospelbooks").insertOne(book);
    if (response.acknowledged > 0) {
        res.status(204).send();
     } else {
        res.status(500).json(response.error || "Some error occurred while updating the gospelbook.");
    }
};

const updateBook = async (req, res) => {
    //#swagger.tags=["Gospelbooks"]
    const userId = new ObjectId(req.params.id);
    const book = {
        title: req.body.title,
        author: req.body.author,
        pages: parseInt(req.body.pages),
        topic: req.body.topic
    };

    const response = await mongodb.getDatabase().db().collection("gospelbooks").replaceOne({ _id: userId } ,book);
        if (response.modifiedCount > 0) {
            res.status(204).send();
        } else {
            res.status(500).json(response.error || "Some error occurred while updating the gospel book.");
        };
}  

const deleteBook = async (req, res) => {
    //#swagger.tags=["Gospelbooks"]
    try {
      const userId = new ObjectId(req.params.id);
      console.log("Deleting gospelbooks with ID:", userId); // line for debugging
      const response = await mongodb.getDatabase().db().collection("gospelbooks").deleteOne({ _id: userId });
  
      if (response.deletedCount > 0) {
        res.status(204).send();
      } else {
        res.status(404).json("gospelbook not found");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      res.status(500).json("Some error occurred while deleting the gospel book.");
    }
  };
  


module.exports = {
    getAll,
    getSingle,
    createBook,
    updateBook,
    deleteBook,
};