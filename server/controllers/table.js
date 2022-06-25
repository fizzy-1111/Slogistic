import express from 'express';
import mongoose from 'mongoose';

import PriceData from '../models/Pricedata.js' ;

const router=express.Router();

export const getTable = async (req, res) => { 
    const { id } = req.params;

    try {
        const table1 = await PriceData[0].find();
        const table2= await PriceData[1].find();
        const table3=await PriceData[2].find();
        var pricedata={table1,table2,table3}
        res.status(200).json(pricedata);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createTable = async (req, res) => {
    
    const newrow10= new PriceData[0](
        {
            name:'0kg - 20kg', speed:"50.000",normal:"32.000",budget:"28.000",table:"1"
        },
        
    )
    const newrow11= new PriceData[0](
        {
            name:'20kg - 50kg',speed: '48.000',normal:'31.000',budget:'28.000',table:"1"
        },
    )
    const newrow12= new PriceData[0](
        {
            name:'50kg - 100kg', speed:'4500',normal:'30.000',budget:'27.000',table:"1"
        },
    )
    const newrow13= new PriceData[0](
        {
            name:'300kg - 500kg', speed:"Tạm dừng",normal:"Liên hệ", budget:'24000',table:"1"
        },
    )
    const newrow14= new PriceData[0](
        {
            name:'Trên 500kg', speed:"Tạm dừng",normal:"Liên hệ",budget:"Liên Hệ",table:"1"
        },
    )
    const newrow15= new PriceData[0](
        {
            name:'Trên 500kg', speed:"Tạm dừng",normal:"Liên hệ",budget:"Liên Hệ",table:"1"
        },
    )
    const newrow16= new PriceData[0](
        {
            name:'Hàng tính khối', speed:"3.900.000",normal:"3.800.000",budget:"3.600.000",table:"1"
        },
    )
    const newrow17= new PriceData[0](
        {
            name:'Thời gian vận chuyển', speed:"1-2 ngày",normal:"7-10 ngày",budget:"10-15 ngày",table:"1"
        },
    )
    const newrow18= new PriceData[0](
        {
            name:'Tình trạng', speed: "Tạm dừng", normal: "Hoạt Động",budget:"Hoạt Động",table:"1"
        }
    )
    const newrow20= new PriceData[0](
        {
            order:1,list:'Giá sản phẩm order', details:'Giá niêm yết sản phẩm trên các sàn thương mại điện tử Trung Quốc',table:"2"
        },
    )
    const newrow21= new PriceData[1](
        {
            order:2,list:'Phí dịch vụ ',details:'Phí dịch vụ mua hàng khách thanh toán cho chúng tôi',table:"2"
        },
    )
    const newrow22= new PriceData[1](
        {
            order:3,list:'Phí vận chuyển nội địa Trung ',details:'Phí vận chuyển hàng từ nhà cung cấp tới kho của S Logistics tại Trung Quốc',table:"2"
        },
    )
    const newrow23= new PriceData[1](
        {
            order:4,list:'Phí nhập hàng nội địa Việt Nam',details:'Phí vận chuyển hàng từ kho tại Trung Quốc về kho của S Logistics tại Việt Nam',table:"2"
        },
    )
    const newrow24= new PriceData[1](
        {
            order:5,list:'Phí đóng hàng, bảo quản hàng hóa',details:'Đóng gói hàng hóa, bảo quản hàng hóa theo yêu cầu của khách hàng',table:"2"
        },
    )
    const newrow25= new PriceData[1](
        {
            order:6,list:'Phí vận chuyển tới địa chỉ yêu cầu ',details:'Vận chuyển từ kho của S Logistics tới địa chỉ yêu cầu của khách hàng',table:"2"
        },
    )
    const newrow30= new PriceData[2](
        {
            order:1,value:'0 - 5 ',price:'4%', porder:'80%',table:"3"
        },
    )
    const newrow31= new PriceData[2](
        {
            order:2,value:'5 - 20 ',price:'3%', porder:'80%',table:"3"
        },
    )
    const newrow32= new PriceData[2](
        {
            order:3,value:'20 - 50 ',price:'2%', porder:'80%',table:"3"
        },
    )
    const newrow33= new PriceData[2](
        {
            order:4,value:'50 - 200 ',price:'1.5%', porder:'70%',table:"3"
        },
    )
    const newrow34= new PriceData[2](
        {
            order:5,value:'Trên 200',price:'1%', porder:'70%' ,table:"3"
        }
    )
    try {
        await newrow10.save();
        await newrow11.save();
        await newrow12.save();
        await newrow13.save();
        await newrow14.save();
        await newrow15.save();
        await newrow16.save();
        await newrow17.save();
        await newrow18.save();
        await newrow20.save();
        await newrow21.save();
        await newrow22.save();
        await newrow23.save();
        await newrow24.save();
        await newrow25.save();
        await newrow30.save();
        await newrow31.save();
        await newrow32.save();
        await newrow33.save();
        await newrow34.save();

        res.status(201).json(newrow10);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
export const updateTable= async(req,res)=>{
    const { id } = req.params;
    const {pos } = req.body;   
    console.log(req.body);
    console.log('receiving');
    //const updatedrow = { name,speed,normal,budget, _id: id };
    //await PriceData[0].findByIdAndUpdate(id, updatedrow, { new: true });
    console.log(pos)
    //res.json(updatedrow)

}