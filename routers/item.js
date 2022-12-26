const express = require('express')
const router = express.Router()
const upload = require("../middleware/multer");
const itemsController = require("../controllers/item");

const { ensureAuth, ensureGuest } = require("../middleware/auth");


// Item Routes - simplified for now
router.get("/", itemsController.getItems);

router.get("/:id", itemsController.getItem);

router.post("/", itemsController.createItem);  //this for admin

router.delete("/:id", itemsController.deleteItem);  // for admin




module.exports = router;
