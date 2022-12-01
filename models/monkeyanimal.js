const mongoose = require("mongoose")
const monkeyanimalSchema = mongoose.Schema({
    monkeyAge: {type : Number, min:1, max:100},
    monkeyName: {type:String, min:1, max:100},
    monkeyBreed: {type:String, min:1, max:100}
})
module.exports = mongoose.model("monkeyanimal",monkeyanimalSchema)