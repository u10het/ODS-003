const User = require("../models/User");
const Appointment = require("../models/Appointment");

exports.getAdminDashboard = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    const appointments = await Appointment.find().populate("doctor patient", "name email");

    res.json({ users, appointments });
  } catch (error) {
    res.status(500).json({ message: "Failed to load admin dashboard", error });
  }
};
