const passport = require('passport');

const LocalStrategy  = require('passport-local').Strategy;

const User =require('../models/user')

//athentication using passport

passport.use(new LocalStrategy({
    usernameField : 'email'
},
    function(email, password, done){
            User.findOne({email:email}, function(err, user){

                if(err){
                        console.log('Error in finding user ---> Passport');
                        return done(err);
                }
                    if(!user || user.password != password){

                        console.log('Invalid Username/password');
                        return done(null, false);
                    }

                    return done(null, user);

            });
    }

));

//serializing the user to which key is to be kept in the cokkies

passport.serializeUser(function(user, done){
    done (null , user.id);
});

//deserialing the user from the key in the cookies
passport.deserializeUser(function(id, done){

    User.findById(id, function(err,user){
        if(err){ console.log('Error in finding user ---> Passport');
        return done(err);}

        return done(null, user);

    });

});

module.exports =passport;