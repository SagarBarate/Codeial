const express = require('express');

const router =express.Router();

const userscontroller = require('../controllers/users_controller')

router.get('/profile', userscontroller.profile);

//for any further routes, access from here
// router.use('/routerName' require('./routerfile'));

router.get('/sign-up', userscontroller.signUp);
router.get('/sign-in', userscontroller.signIn);

router.post('/create', userscontroller.create); //form for user sign is posting the data so method should be same



module.exports =router;
