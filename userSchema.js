const mongoose = require("mongoose");

const userDetail = new mongoose.Schema({
    fname:String,
    lname:String,
    email: {type:String,unique:true},
    uname:{type:String,unique:true},
    password:String,
    lamount:Number,
    lterm:Number,
    irate:Number,
    bcost:Number,
    balance:Number,
    apr:Number,
    lpayment:Number,
    damount:Number,
    apy:Number,
    lAmount:Number,
    APR:Number,
    IRate:Number,
    lTerm:Number,
    bCost:Number,
},
{
    collection: "UserInfo", 
}
);

mongoose.model("UserInfo",userDetail);