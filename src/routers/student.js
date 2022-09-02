const express = require("express");
const route = new express.Router();
const Student=require("../models/students");
route.get("/pritam", (req, res) => {
  res.send("Hello , My name is pritam");
});
//create a new student
// route.post("/students",(req,res)=>{
//     console.log(req.body)
//     const user=new Student(req.body);
//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((e)=>{
//         res.status(400).send(e);
//     });
// })

route.post("/students", async (req, res) => {
  try {
    // console.log(req.body);
    const user = new Student(req.body);
    const createuser = await user.save();
    res.status(201).send(createuser);
  } catch (err) {
    res.status(400).send(err);
  }
});
route.get("/students", async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.send(studentsData);
  } catch (e) {
    res.status(400).send(e);
  }
});

route.get("/students/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const studentData = await Student.find({ name: "somu" });
    if (!studentData) {
      res.status(404).send();
    } else {
      res.send(studentData);
    }
  } catch (e) {
    res.send(e);
  }
});

route.delete("/students/:id", async (req, res) => {
  try {
    const deleteStudent = await Student.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(400).send();
    }
    res.send(deleteStudent);
  } catch (e) {
    res.status(500).send();
  }
});

route.patch("/students/:id", async (req, res) => {
  try {
    const updateStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.send(updateStudent);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = route;
