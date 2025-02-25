const Mongoose = require("mongoose");

const itemSchema = new Mongoose.Schema({
    Dish_Name: {
        type: String,
        required: true
    },
    Cost: {
        type: Number,
        required: true
    }
})

const menuDetails = Mongoose.model("menuDetails", itemSchema);
module.exports = menuDetails;