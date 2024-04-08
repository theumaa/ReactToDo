const { model } = require("mongoose");
const ToDoModels = require("../models/ToDoModels");

module.exports.getToDo = async (req, res) => {
  const toDo = await ToDoModels.find();
  res.send(toDo);
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;

  ToDoModels.create({ text }).then((data) => {
    console.log("Added successfully....");
    console.log(data);
    res.send(data);
  });
};

module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body;
  ToDoModels.findByIdAndUpdate(_id, { text })
    .then(() => res.send("Updated successfully..."))
    .catch((err) => console.log(err));
};

module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;
  ToDoModels.findByIdAndDelete(_id)
    .then(() => res.send("Deleted successfully..."))
    .catch((err) => console.log(err));
};

