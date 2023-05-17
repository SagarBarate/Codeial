const { render } = require("ejs");

module.exports.profile =function(req, res){
    return res.render('user_profile',{
        title:'User Profile'
    });
}

//render the sign UP page
module.exports.signUp = function(req, res){
    return res.render('user_sign_up',{
        title:"Codeial | Sign Up"
    })
}


//render the sign in page
module.exports.signIn = function(req, res){
    return res.render('user_sign_in',{
        title:"Codeial | Sign In"
    })
}

// get the sign up data 
// module.export.create= function(req,res){
//     //TO DO Later

// }

// //sign in and create a session for the user
// module.export.createSession= function(req,res){
//     //TO DO Later

// }

