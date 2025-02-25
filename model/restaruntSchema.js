const Mongoose = require("mongoose");

const restSchema = new Mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        required: true
    }
});

const restaruntDetails = Mongoose.model("restaruntDetails", restSchema);
module.exports = restaruntDetails;