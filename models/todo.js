const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  task: { type: String, required: true },
  active: { type: Boolean, required: true },
});

const Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;
