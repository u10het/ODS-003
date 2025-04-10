const express = require("express");
const { getDashboard, getAllUsers, deleteUser } = require("../controllers/adminController");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const router = express.Router();

router.get("/dashboard", auth, role("Admin"), getDashboard);
router.get("/users", auth, role("Admin"), getAllUsers);
router.delete("/users/:id", auth, role("Admin"), deleteUser);

module.exports = router;
