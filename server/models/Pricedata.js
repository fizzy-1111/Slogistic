import mongoose from "mongoose";

const table1=mongoose.Schema({
        name:String,
        speed:String,
        normal:String,
        budget:String,
})
const table2=mongoose.Schema({
    order: Number,
    list: String,
    details:String,
})
const table3=mongoose.Schema({
    order: Number,
    value:String,
    price: String,
    porder:String,
})
var PriceData= [mongoose.model('table1',table1),mongoose.model('table2',table2),mongoose.model('table3',table3)]

export default PriceData;