// Needed Resources 
const express = require("express")
const router = new express.Router() 
const baseController = require("../controllers/baseController")
const invController = require("../controllers/invController")

// Route to build inventory by classification view
router.get("/type/:classificationId", invController.buildByClassificationId);
// Route to build vehicle details by detail view
router.get("/detail/:invId", invController.buildByInvId)
router.get("../partials/footer", baseController.footerErr)

module.exports = router;