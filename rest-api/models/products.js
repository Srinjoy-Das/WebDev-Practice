const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: [true, 'Price must be provided'],
    },

    featured: {
        type: Boolean,
        default: false,
    },

    rating: {
        type: Number,
        required: 4.9,
    },

    createdAt: {
        type: Date,
        default: Date.now(),
    },

    company: {
        type: String,
        emun: {
            values: ["apple", "samsung", "dell", "mi", "oppo", "asus", "lenovo"],
            message: `{VALUE} not supported`,
        },
    },
});

module.exports = mongoose.model("Product", productSchema);