const mongoose = require('mongoose');

const DuckSchema = mongoose.Schema({
    user: {
        type: String,
        required: true,
    },
    problem: {
        type: String,
        required: true,
    },
    goal: {
        type: String,
        required: true,
    },
    steps: {
        type: Number,
        max: 5,
        required: true,
    },
});

module.exports = mongoose.model('problems', DuckSchema);
