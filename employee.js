const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  f_Image: String,
  f_Name: { type: String, required: true },
  f_Email: { type: String, required: true },
  f_Mobile: { type: String, required: true },
  f_Designation: String,
  f_gender: { type: String, enum: ["Male", "Female", "Other"] },
  f_Course: String,
  f_Createdate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Employee", employeeSchema);
