const { model } = require("mongoose");
const ToDoModels = require("../models/ToDoModels");

module.exports.getToDo = async (req, res) => {
  const toDo = await ToDoModel.find();
  res.send(toDo);
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;

  ToDoModel.create({ text }).then((data) => {
    console.log("Added successfully....");
    console.log(data);
    res.send(data);
  });
};
