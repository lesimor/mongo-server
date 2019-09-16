const mongoose = require('mongoose');
const { Schema } = mongoose;

const Model = new Schema({
    question: String,
});

module.exports = mongoose.model('Theme', Model);
