const Task = require('../models/Task');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

router.post('/', async (req, res) => {
    const { title, color } = req.body;
    // TODO: valdate if all properties are filled in
    // TODO: validate if color is correct hash
    const task = new Task({
        title: title,
        color: color == null ? null : color
    });
    
    await task.save();
    
    return res.json(task);
});

module.exports = router;