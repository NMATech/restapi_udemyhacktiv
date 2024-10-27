const express = require("express");
const router = express.Router();
const contactController = require("../controllers/Contacts");

router.post("/", contactController.create);
router.get("/", contactController.findAll);
router.get("/id/:id", contactController.findById);
router.put("/update/id/:id", contactController.update);
router.delete("/delete/id/:id", contactController.delete);

module.exports = router;
