const mongoose = require('mongoose');
const algoScriptSchema = mongoose.Schema({
    script: String,
    status: Boolean,
    activeUser: Number,
});

module.exports = mongoose.model('AlgoScript', algoScriptSchema);