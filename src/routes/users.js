const argon2 = require('argon2');
const User = require('../models/User');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        const reformatedUsers = users.map(user => {
            return {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName
            }
        });
        return res.status(200).json(reformatedUsers);
    } catch (err) {
        return res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const { firstName, lastName, email, password, password2 } = req.body;

        const userFound = await User.findOne({ email: email });

        if (userFound)
            return res.status(400).json({ msg: 'Email already in use.' })

        if (password != password2)
            return res.status(400).json({ msg: 'Passwords do not match.' });

        const hash = await argon2.hash(password);

        const user = new User({
            firstName,
            lastName,
            email,
            password: hash
        });

        await user.save();

        return res.status(201).json({
            msg: 'User successfully created.'
        });
    } catch (err) {
        return res.status(500).json(err);
    }
});

module.exports = router;