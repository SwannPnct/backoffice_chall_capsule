const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    lastname: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
    },
    age: {
        type: Number,
        min: 0,
        max: 120
    },
    type: {
        type: String,
        enum: ["Family", "Friend", "Work"]
    }
});

const ContactModel = mongoose.model("contacts", contactSchema);

module.exports = ContactModel;