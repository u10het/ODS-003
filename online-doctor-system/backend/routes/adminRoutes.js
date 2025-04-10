const express = require("express");
const { getDashboard, getAllUsers, deleteUser } = require("../controllers/adminController");
const protect = require("../middleware/protect");
const adminOnly = require("../middleware/adminOnly");


const router = express.Router();

router.get("/dashboard", protect, adminOnly, getDashboard);
router.get("/users", protect, adminOnly, getAllUsers);
router.delete("/users/:id", protect, adminOnly, deleteUser);


module.exports = router;
