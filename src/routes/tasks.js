const Task = require('../models/Task');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find().sort({createdAt: -1}).populate({path: 'user'}).populate('type') // different ways
        return res.status(200).json(tasks);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const { typeId, userId } = req.body;

        const task = new Task({type: typeId, user: userId});
        await task.save();
        
        return res.status(201).json({
            msg: 'Created task successfully.'
        });
    } catch (err) {
        return res.status(500).json(err);
    }
});

module.exports = router;