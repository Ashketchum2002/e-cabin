const router = require("express").Router();
const Employee = require("../models/Employee");

const bcrypt = require("bcrypt");
const saltRounds = 15;

module.exports = router


router.get("/",function (req, res){
    res.send("<h1>This is the Auth Page</h1>")
});

router.get("/register",async (req,res) => {
    res.status(200).json("This is the Registration page");
});

router.post("/register",async (req,res) => {
    // const defPassword = req.body.email + "@" + req.body.phoneNumber.substr(0,3);
    const defPassword = req.body.phoneNumber.substr(0,5);
    console.log(defPassword);

    await bcrypt.hash(defPassword, saltRounds, function(err, hash) {
        const newEmployee = new Employee({
            name : req.body.name,
            email : req.body.email,
            password : hash,
            phoneNumber : req.body.phoneNumber,
            department : req.body.department,
            joiningDate : req.body.joiningDate
        });
        try{
            newEmployee.save(function(err){
                if(err){
                    console.log("Err while registering");
                }else{
                    console.log("Registered Successfully");
                }
            })
        }catch(err){
            console.log(err);
            res.status(400).json("Error has raised while registering");
        }
    });
});

router.post("/login", function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    Employee.findOne({email: email}, function(err,results){
        if(err){
            console.log("Erorr while logging in");
        }else{
            if(results){
                bcrypt.compare(password, results.password).then(function(isValid) {
                    if(isValid === true){
                        res.status(200).send(results);
                        console.log(results);
                    }
                    else{
                        res.status(400).json("Password is incorrect");
                    }
                });
            }

            else {
                res.send("Create an account")
            }
        }
    });

});


router.post("/editProfile", async (req, res) => {

    try {
        const user = await Employee.findById(req.body._id);
        
        if (!user) {
            res.send("User not found")
            return 
        }

        else if (user.isDisabled) {
            res.send("Your account has been suspended")
            return
        }

        // user.name = req.body.name
        // user.phoneNumber = req.body.phoneNumber

        await user.updateOne({name: req.body.name, phoneNumber: req.body.phoneNumber});
        
        res.send("Saved")

    } catch(err) {
        console.log(err);
    }

});