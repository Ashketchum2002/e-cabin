const router = require("express").Router();

const Employee = require("../models/Employee");
const Task = require("../models/Task");
const bcrypt = require("bcrypt");

module.exports = router



// Update user
// modify
// router.put("/:id", async (req,res)=>{
//     if(req.body.userId === req.params.id){
//         if(req.body.password){
//             try{
//                 await bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
//                     req.body.password = hash;
//                 });
//             }catch(err){
//                 res.status(500).json("Error while updating password");
//             }
//         }
//         try{
//             const userUpdated = await User.findByIdAndUpdate(req.params.id,{
//                 $set : req.body
//             });
//             res.status(200).json("Account has been updated");
//         }catch(err){
//             res.status(500).json("Error while updating the account");
//         }
//     }else{
//         return res.status(403).json("You can update only your account!");
//     }
// });


// // Delete a user
// // modify
// router.delete("/:id", async (req,res)=>{
//     if(req.body.userId === req.params.id){
//         try{
//             // const deletedUser = User.findByIdAndDelete(req.params.id);
//             const deletedUser = User.deleteOne({"_id" : req.params.id}, function(err){
//                 if(err){
//                     console.log(err);
//                 }else{
//                     // console.log("Done");
//                     res.status(200).json("Account has been deleted Successfully");
//                 }
//             } );
            
//         }catch(err){
//             res.status(500).json("Error while deleting the account");
//         }
//     }else{
//         return res.status(403).json("You can delete only your account!");
//     }
// });

function extractData(empId){

}

// Get a user

// const Employee = await Employee.findById(req.params.id);
// const {password, ...other} = Employee._doc
// res.status(200).json(other);



function getWeekDates(){
    var weekDates = []
    for(let i=1; i<7;i++){
        let yesterday = new Date(d - (864e5)*i);
        weekDates.push(yesterday);
    }
    return weekDates;
}


async function getEmpStats(empId){
    // weekDays = [day7,day6,day5,day4,day3,day2,day1]; 
    var weekDayStats = [];

    for (let i=0;i<7;i++){
        let tmrw = new Date(Date.now() + 864e5 -864e5*i);
        let curr = new Date(Date.now() - 864e5*(i));
        // console.log("--------------------------------------------------------------");
        // console.log("Day : "+(7-i));
        try{
            const tasksDone = await Task.find({employeeId:empId, startTime:{$lte : tmrw.setHours(0,0,0,0), $gt: curr.setHours(0,0,0,0)}});
            // console.log(tasksDone);
            const stats = [0,0,0]; // stats[0] = break, stats[1] = meet, stats[2] = work
            tasksDone.forEach(function(tsk){
                if (tsk.taskType == "break") stats[2] += tsk.timeTaken; 
                else if (tsk.taskType == "meet") stats[1] += tsk.timeTaken; 
                else stats[0] += tsk.timeTaken; 
            });
            weekDayStats.push(stats);
        }catch(err){
            console.log("Error while reading prev tasks");
            console.log(err);
        }
    }
    return weekDayStats;
}

router.post("/addEmployee", async (req, res) => {
    try {

        const employee = await Employee.findOne({email: req.body.email});

        if (employee) {
            res.send("This email already exists")
            return
        }

        const newEmployee = new Employee({
            name: req.body.name,
            email: req.body.email,
            password: req.body.phoneNumber.substr(0,5),
            phoneNumber: req.body.phoneNumber ? req.body.phoneNumber : "",
            isAdmin: req.body.isAdmin,
            joiningDate: req.body.joiningDate,
            department: req.body.department,
        })

        const salt = await bcrypt.genSalt(15);
        newEmployee.password = await bcrypt.hash(newEmployee.password, salt)

        await newEmployee.save()

        res.send("Saved")

    } catch(err) {
        console.log(err);
    }
})


router.post("/weeklyStats", async (req,res)=>{
    try{
        const tasksMeta = await Task.find({employeeId:req.body._id});
        const tasks = [];
        tasksMeta.forEach(function (tsk){
            const t = {
                taskDesc: tsk.taskDesc,
                taskType: tsk.taskType,
                startTime: tsk.startTime,
                timeTaken: tsk.timeTaken
            }
            tasks.push(t);
        });
        let weekDayStats = await getEmpStats(req.body._id);
        res.status(200).json(weekDayStats);
    }catch(e){
        console.log(e);
        res.status(500).json(e)
    }
});


// Get all users
router.post("/", async (req,res)=>{
    try{
        const EmployeesMeta = await Employee.find();
        // console.log(EmployeesMeta);
        const Employees = [];
        EmployeesMeta.forEach(function (emp){
            const e = {
                _id: emp._id,
                name: emp.name,
                email: emp.email,
                phoneNumber: emp.phoneNumber,
                department: emp.department,
                joiningDate: emp.joiningDate
            }
            Employees.push(e);
        });
        res.status(200).json(Employees);
    }catch(e){
        console.log(e);
        res.status(500).json("Error while fetching an user.")
    }
});

