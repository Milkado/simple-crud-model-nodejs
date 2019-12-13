const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    campo: String,    
    campo2: {
        type: Number,
        default: 0,
    }
}, {
    timestamps: true
})

mongoose.model('Model', Schema)

