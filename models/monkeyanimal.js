const mongoose = require("mongoose")
const monkeyanimalSchema = mongoose.Schema({
    monkeyAge: Number,
    monkeyName: String,
    monkeyBreed: String
})
module.exports = mongoose.model("monkeyanimal",monkeyanimalSchema)