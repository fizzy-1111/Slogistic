import express from 'express';
import mongoose from 'mongoose';

import Newsmessage from '../models/Newsmessage.js' ;

const router=express.Router();

export const getNews = async (req, res) => { 
    const { id } = req.params;

    try {
        const news = await Newsmessage.find();
        
        res.status(200).json(news);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createNews = async (req, res) => {
    

    const newNewsMessage = new Newsmessage({
        title:"Dịch vụ đổi tiền ",
        content: ["xem thêm để biết thêm thông tin"],
        creator: "Tung Lam",
    })
    try {
        await newNewsMessage.save();

        res.status(201).json(newNewsMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}