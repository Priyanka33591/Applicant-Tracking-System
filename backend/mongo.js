const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/login-signup-page")

    .then(() => {
        console.log("mongoDB connected");
    })

    .catch(() => {
        console.log('failed');
    })

const newSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
})

const collection = mongoose.model("collection", newSchema)

module.exports = collection
