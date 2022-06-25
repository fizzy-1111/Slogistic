import express from 'express';
import mongoose from 'mongoose';
import User from '../models/User.js' ;

const router=express.Router();
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
export const LogIn = async (req, res) => { 
    const{
        username, 
        password
    } = req.body;
    console.log(req.body)
    const user = await User.findOne({username});
    console.log("hello")
    var validPassword = true
    if(user!=null){
      validPassword=await bcrypt.compare(password, user.password);
    }
    if (!user) {
        res.json({
            status: 0,
            message: 'User does '
        });
    }
    else if (!validPassword) {
        console.log("near")
        res.json({
            status: 0,
            message: 'Wrong password.'
        });
    }
    else{
        res.json({
            status: 1,
            message: 'Signed in successfully.',
            data: {
                token: jwt.sign({
                        id: user._id
                    }, "secretKey"),
                user
            }
        });
    }
}
export const getUser = async (req, res) => { 
    try {
        const gUser = await User.find();
                
        res.status(200).json(gUser);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createUser = async (req, res) => {
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("12345", salt);
    const newUser = new User({
       username:"Dang Duy",
       password:hashedPassword,
    })
    try {
        await newUser.save();

        res.status(201).json(newUser );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}