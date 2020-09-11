const Type = require('../models/Type');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const types = await Type.find();
    res.json(types);
});

router.post('/', async (req, res) => {
    try {
        const { title, color } = req.body;
        // TODO: valdate if all properties are filled in
        // TODO: validate if color is correct hash
        const type = new Type({
            title: title,
            color: color == null ? null : color
        });

        await type.save();

        return res.status(201).json(type);
    } catch (err) {
        return res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Type.deleteOne({_id: id});
        return res.status(200).json({msg: 'Deleted type successfully.'})
    } catch (err) {
        return res.status(500).json(err);
    }
});

module.exports = router;