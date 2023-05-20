const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;

//used for session cookie
const session =require('express-session');
const passportLocal= require('./config/passport-local-stratergy');
const expressLayouts = require('express-ejs-layouts');  //requireing the layouts 


const db = require('./config/mongoose');
const passport = require('./config/passport-local-stratergy');

//reading through the post request to read the data and information from the form
app.use(express.urlencoded());

app.use(cookieParser());

//Layouts
app.use(express.static('./assets'));
app.use(expressLayouts);

//extract styles and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//use express router
app.use('/',require('./routes'));

//set up of the view engine
app.set('view engine', "ejs")
app.set('views', './views');

//
app.use(session({
    name:'codial',

    //TODO change the secret before deployement in the production mode

    secret:'blahsomething',
    saveUninitialized:false,

    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    }
}));

app.use(passport.initialize());
app.use(passport.session());

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});




