import express from "express";
import * as tutorial from '../controller/controller.js'

const router = express.Router();

// Create a new Tutorial
router.post("/", tutorial.create);

// Retrieve all Tutorials
router.get("/", tutorial.findAll);

// Retrieve all published Tutorials
router.get("/published", tutorial.findAllPublished);

// Retrieve a single Tutorial with id
router.get("/:id", tutorial.findOne);

// Update a Tutorial with id
router.put("/:id", tutorial.update);

// Delete a Tutorial with id
router.delete("/:id", tutorial.deleteTutorial);

// Delete all Tutorials
router.delete("/", tutorial.deleteAll);

export default (app) => {
  app.use("/api/tutorials", router);
};
