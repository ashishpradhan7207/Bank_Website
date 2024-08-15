// /backend/controllers/contactController.js
const Contact = require('../models/Contact');

// Handle contact form submission
exports.submitContact = async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const contact = new Contact({
            name,
            email,
            message,
        });

        await contact.save();
        res.json({ msg: 'Message sent' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
