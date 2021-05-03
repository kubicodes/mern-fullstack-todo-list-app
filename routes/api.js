const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

router.get('/', async (req, res) => {
  try {
    const data = await Todo.find({});
    res.status(200).json({
      status: 'success',
      data,
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: 'Could not load Data. Please try again',
    });
  }
});

router.get('/active', async (req, res) => {
  try {
    const data = await Todo.find({
      active: true,
    });

    if (!data) {
      res.status(200).json({});
    }
    res.status(200).json({
      status: 'success',
      data,
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: 'Could not find with this filter.',
    });
  }
});

router.get('/done', async (req, res) => {
  try {
    const data = await Todo.find({
      active: false,
    });

    if (!data) {
      res.status(200).json({});
    }
    res.status(200).json({
      status: 'success',
      data,
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: 'Could not find with this filter.',
    });
  }
});

router.post('/', async (req, res) => {
  const data = req.body;
  const createdTodo = new Todo(data);

  try {
    await createdTodo.save();
    return res.status(201).json({
      status: 'success',
      message: 'Successfully saved!',
    });
  } catch (error) {
    return res.status(500).json({
      status: 'failed',
      message: 'Your Submit could not be saved. Please check your input',
    });
  }
});

router.patch('/:id', async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  try {
    await Todo.findByIdAndUpdate(id, data);
    res.status(200).json({
      status: 'success',
      message: 'Succesfully updated',
    });
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      message: 'No Match found',
    });
    return;
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    await Todo.findByIdAndDelete(id);
    res.status(200).json({
      status: 'success',
      message: 'Succesfully deleted',
    });
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      message: 'No Match found',
    });
  }
});

module.exports = router;
