const express = require('express')
const router = express.Router()
const Auth = require('../middleware/auth')
const upload = require("../middleware/multer");
const itemsController = require("../controllers/item");

const { ensureAuth, ensureGuest } = require("../middleware/auth");


// Item Routes - simplified for now
router.get("/items", ensureAuth, itemsController.getItems);

router.get("/:id", ensureAuth, itemsController.getItem);

router.post("/createItem", upload.single("file"), itemsController.createItem);  //this for admin


router.delete("/deleteItem/:id", itemsController.deleteItem);  // for admin




module.exports = router;
