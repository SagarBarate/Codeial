const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/codeial_development');

const db = mongoose.connection;

db.on('error', console.error.bind(console,"Error conecting to Mongodb"));

db.once('open', function(){
    console.log('connected to Database:: MongoDB');
});

module.exports = db;



