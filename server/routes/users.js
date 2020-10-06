const express = require('express');
const router = express.Router();//To intialize router variable from express.Router() function
const User = require('../models/userSchema'); //To get User from that schema we made


//Get data
router.get('/',async (req,res)=>{
    const users = await User.find();
    res.json(users);
});

//Find a Specific user
router.get('/:id',async (req,res)=>{
    const users = await User.findOne({_id:req.params.id});
    res.json(users);
});

//Delete all User
router.delete('/delete',async (req,res)=>{
    await User.remove({});
    res.send('Deleted')
});

//
router.delete('/:id',async (req,res)=>{
    await User.remove({_id: req.params.id});
    res.send('Deleted');
})

//Post a user
router.post('/add',async (req,res)=>{
    const users = await  User.create({
        id: req.body.id,
        userName: req.body.userName,
        adress: req.body.adress,
        city: req.body.city,
        phoneNumber: req.body.phoneNumber
    })
    res.json(users);
});

//Update a user's Data
router.patch('/:id', async (req,res)=>{
    const newUser = await User.update({_id: req.params.id}, 
        {$set :{ 
            userName: req.body.userName, 
            city: req.body.city,
            adress: req.body.adress,
            phoneNumber: req.body.phoneNumber
        }})
    res.json(newUser);
});


module.exports = router;