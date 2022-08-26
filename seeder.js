const mongoose = require('mongoose');
const dotenv = require('dotenv')
const fs = require('fs');

//Load enn variables
dotenv.config({path:'./config/config.env'});

//load models
const Book = require('./models/book.model');


//db connection
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    //useCreateIndex:true,
    //useFindAndModify:false,
    //useUnifiedTopology:true

});

//load file to books const
const books = JSON.parse(   fs.readFileSync(`${__dirname}/_data/books.json`,'utf-8'));

const importData = async () =>{
    try {
        await Book.create(books);
        console.log('Imported data');
        process.exit();
    } catch (error) {
        console.error(error);
    }
}
