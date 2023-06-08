const express = require('express');
const router =express.Router();

const passport =require('passport');

const usersController = require('../controllers/users_controller')

router.get('/profile',passport.checkAuthentication, usersController.profile);

//for any further routes, access from here
// router.use('/routerName' require('./routerfile'));

router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);


router.post('/create', usersController.create); //form for user sign is posting the data so method should be same

//use passport as a middleware to authenticate
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/users/sign-in'},
),usersController.createSession);


module.exports =router;


