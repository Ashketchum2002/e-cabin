// Task Schema

const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
    {
        employeeId:{
            type: String,
            required : true
        },
        taskDesc:{
            type: String,
            required:true,
            max:300
        },
        taskType:{
            type : String,
            enum: ['meet', 'work', 'break'], 
            required: true
        },
        startTime:{
            type: Date,
            required:true
        },
        timeTaken:{
            type: Number,
            required:true
        }
    },
    {timestamps:true}
);




const Task = mongoose.model("Tasks", TaskSchema);
module.exports = Task;