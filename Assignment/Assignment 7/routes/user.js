const express = require('express')
const router = express.Router()
const UserModel = require('../models/User')
const Joi = require('joi')



router.post('/create', async (req,res) => {

    const schema = Joi.object({
        email:Joi.string().email().required(),
        password:Joi.string().min(6).required()
    })

    const {error} = schema.validate(req.body)
    if(error) return res.send(error.details[0].message);
    const user = await new UserModel({
        email:req.body.email,
        password:req.body.password
    })
    user.save(function (err,resp){
        if(err) return res.send(err)
        res.send(resp)
    });
})

router.get('/getAll',async (req, res) => {
    const users = await UserModel.find()
    try{
        res.send(users)
    }catch(err){
        res.send(err)
    }
})

router.delete('/user/delete/:id', async (req,res) => {
    const id = req.params.id;
    const deletedUser = await UserModel.remove({
        _id:id
    })
    try{
        res.send(deletedUser)
    }catch(err){
        res.send(err)
    }

})

router.patch('/user/edit/:id',async (req,res) => {
    const id = req.params.id;
    const schema = Joi.object({
        email:Joi.string().email().required(),
        password:Joi.string().min(6).required()
    })

    const {error} = schema.validate(req.body)
    if(error) return res.send(error.details[0].message);
    const update = await UserModel.update(
        {_id:id},
        {
            $set: req.body
        }
    )
    try{
        res.send(update)
    }catch(err){
        res.send(err)
    }

})

module.exports = router