const mongoose = require('mongoose');
const { Schema } = mongoose;

const Theme = new Schema({
    question: String,
});

module.exports = mongoose.model('Theme', Theme);
