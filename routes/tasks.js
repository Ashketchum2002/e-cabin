const Task = require("../models/Task");
const Employee = require("../models/Employee");

const router = require("express").Router();


// Add a Task
router.post("/", async (req,res)=>{
    try{
        const newTask = new Task({
            employeeId: req.body.employeeId,
            taskDesc: req.body.taskDesc,
            taskType: req.body.taskType,
            startTime: new Date(req.body.startTime),
            timeTaken: req.body.timeTaken
        });
        await newTask.save();
        res.status(200).send(newTask);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});


// update task
// Have to re-check
router.put("/:taskId", async (req,res)=>{
    try{
        if(req.body.taskId === req.params.taskId){
            const task =  Task.findById(req.body.taskId);
            await task.updateOne({$set:req.body});
            res.status(200).json("Task updated successfully");
        }else{
            res.status(403).json("Task id not matched");
        }
    }catch(err){
        res.status(500).json("Error while updating a task");
    }
});


// delete task
// re check
router.delete("/:taskId", async (req,res)=>{
    try{
        if(req.body.taskId === req.params.taskId){
            const task =  await Task.findByIdAndDelete(req.body.taskId);
            res.status(200).json("Task has been deleetd");
        }else{
            res.status(403).json("Task id not matched");
        }
    }catch(err){
        res.status(500).json("Error while deleting a task");
    }
});



// Fetch all the tasks
router.post("/timeline", async (req, res) =>{
    // console.log(req.body.userId);
    try{
        // const currentEmployee = await Employee.findById(req.body.userId);
        const employeeTasks = await Task.find({employeeId: req.body.userId});
        res.status(200).json(employeeTasks);
    }catch(err){
        console.log(err);
        res.status(500).json("Error while fetching employee tasks.")
    }
});


router.post("/todayTasks", async (req, res) => {
    try{
        var todayTasks = []
        var yesterdayTasks = []
        for (let i=0;i<2;i++){
            let tmrw = new Date(Date.now() + 864e5 -864e5*i);
            let curr = new Date(Date.now() - 864e5*(i));
            // console.log("--------------------------------------------------------------");
            // console.log("Day : "+(7-i));
            try{
                const tasksDone = await Task.find({employeeId:req.body.userId, startTime:{$lte : tmrw.setHours(0,0,0,0), $gt: curr.setHours(0,0,0,0)}});
                // console.log(tasksDone);
                tasksDone.forEach(function(tsk){
                    if (i == 0) {
                        todayTasks.push(tsk)
                    }
    
                    else {
                        yesterdayTasks.push(tsk)
                    }
                });

            }catch(err){
                console.log("Error while reading prev tasks");
                console.log(err);
            }
        }
        var employeeTasks = []
        employeeTasks.push(todayTasks)
        employeeTasks.push(yesterdayTasks)
        res.status(200).send(employeeTasks);
    }catch(err){
        console.log(err);
        res.status(500).json("Error while fetching employee tasks.")
    }
})





module.exports = router





