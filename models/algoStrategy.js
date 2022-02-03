const mongoose = require('mongoose');
const algoStrategySchema = mongoose.Schema({
    strategy: String,
    status: Boolean,
    activeUser: Number,
});

module.exports = mongoose.model('AlgoStrategy', algoStrategySchema);