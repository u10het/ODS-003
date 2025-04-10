const User = require("../models/User");
const Appointment = require("../models/Appointment");

exports.getDashboard = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    const appointments = await Appointment.find().populate("doctor patient", "name email");

    res.json({ users, appointments });
  } catch (error) {
    res.status(500).json({ message: "Failed to load admin dashboard", error });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users", error });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
};
