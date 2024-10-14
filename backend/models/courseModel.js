const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  courseID: "String",
  courseName: "String",
  courseDescription: "String",
  courseCategory: "String",
  coursePrice: "Number",
  courseImage: "String"
});

const courseModel = mongoose.model("Course", courseSchema);
module.exports = courseModel;
