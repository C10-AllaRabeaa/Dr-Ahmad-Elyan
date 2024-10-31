const userModel =require('../models/usersSchema')
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken");

const creatUser = (req, res) => {
    console.log(req.body);


    const { firstName, lastName, age, country, email, password } = req.body

    const newUser = new userModel({
        firstName, lastName, age, country, email, password
    })
    console.log(newUser);
    newUser.save()
        .then((result) => {
            console.log(result);
            res.status(200)
            res.json("Successfully registered a new user")
        }).catch((error) => {
            console.log(error);
            res.status(401)
            res.json({ error: error })
        })

}

const getAllUsers = (req, res) => {
    console.log(req.body);
    userModel.find()
    .populate("role")
        .then((result) => {
            console.log(result);
            res.status(200)
            res.json({
                success: true,
                message: "All the Users",
                User: result
            })
        })
        .catch((error) => {
            res.status(500)
            res.json({
                success: false,
                message: "Server Error",
                error: error
            })
        })
}

const login = (req, res) => {
    console.log(req.body);

    const { email, password } = req.body

    userModel.findOne({ email })
        .then(async (result) => {
            if (!result) {
                res.status(404)
                res.json('email not registered')
            } try {
                const isValid = await bcryptjs.compare(password, result.password);

                if (!isValid) {
                    res.status(404)
                    res.json('password not match')
                } else {
                    const payload = {
                        id: result._id,
                        role: result.role,

                    }
                    const options = {
                        expiresIn: "1h"
                    }
                    const userToken = jwt.sign(payload, process.env.SECRET, options)

                    res.json({ message: "welcome to the website and You are logged in", token: userToken });
                    console.log(userToken);
                    console.log(payload);
                }
            }
            catch (error) {
                throw new Error(error.message)
            }
        }).catch((error) => {
            console.log(error);
            res.status(401)
            res.json({ error: error })
        })
}


const updateUserById = (req, res) => {
    const favoratieid = req.params.id
    const userId = req.token.id;
 console.log(req.token);
    userModel.findByIdAndUpdate(
         {_id : userId },
        { $push: { favoratie: favoratieid } },
        { new: true }
    )
        .then((result) => {
            res.status(201).json({
                success: true,
                message: `item added from favorites`,
                comment: result,
            });
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({
                success: false,
                message: `Server Error`,
                err: error.message,
            });
        })
};

const delateUserById = (req, res) => {
    console.log("teset");
    const favoratieid = req.params.id
    const userid = req.token.id;
    
    userModel.findByIdAndUpdate(
        { _id: userid },
        { $pull: { favoratie: favoratieid } },
        { new: true }
    )
        .then((result) => {
            res.status(201).json({
                success: true,
                message: `item removed from favorites`,
                comment: result,
            });
        })
        .catch((error) => {
            res.status(500).json({
                success: false,
                message: `Server Error`,
                err: error.message,
            });
        })
};

const getuserById = (req, res) => {
    const userById = req.token.id;
    console.log(userById);
    userModel.findById({_id:userById})
    .populate("favoratie")
        //question use result or arcicals
        .then((resulte) => {
            console.log(resulte);
            res.status(200)
            res.json({
                success: true,
                massage: `The User ${userById}`,
                resulte: resulte
            })
        }).catch((error) => {
            res.status(500)
            res.json({
                success: false,
                message: "Server Error",
                error: error.message
            })
        })
}

module.exports = { creatUser, getAllUsers, login, updateUserById ,delateUserById,getuserById}