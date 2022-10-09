// Let's build here the User schema

const mongoose = require("mongoose");



const EmployeeSchema = new mongoose.Schema(
    {
    name : {
        type:String,
        required:true,
        min:3,
        max:20,
    },
    email : {
        type:String,
        required:true,
        max:50,
        unique:true
    },
    password : {
        type:String,
        required:true
    },
    phoneNumber : {
        type : String,
        required : true,
        max : "20"
    },
    department:{
        type:String,
        required:true,
    },
    joiningDate:{
        type:Date,
        required : true
    },
    profilePicture:{
        type:String,
        default:""
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
    },
    {timestamps:true}
);




const Employee = mongoose.model("Employees", EmployeeSchema);
module.exports = Employee;