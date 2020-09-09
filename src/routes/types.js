const Task = require('../models/Type');
const Type = require('../models/Type');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const types = await Type.find();
    res.json(types);
});

router.post('/', async (req, res) => {
    const { title, color } = req.body;
    // TODO: valdate if all properties are filled in
    // TODO: validate if color is correct hash
    const type = new Type({
        title: title,
        color: color == null ? null : color
    });
    
    await type.save();
    
    return res.json(type);
});

module.exports = router;