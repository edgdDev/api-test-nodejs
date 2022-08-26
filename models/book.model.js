const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    id:{
        type:Number,
        required: [true,'']
    },
    title:{
        type:String,
        required: [true,'Please add a title']
    },
    year:{
        type:Number,
        required: [true,'Please add a year']
    }
});

module.exports = mongoose.model('Book',bookSchema);