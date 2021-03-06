const express = require("express");
const User = require("../server/userModel.js");
const authRouter = express.Router();
const jwt = require("jsonwebtoken");

//sign up
authRouter.post("/signup", (req, res, next) => {
    console.log("fired")
    User.findOne({ username: req.body.username }, (err, existingUser) => {
        if (err) {
            res.status(500);
            return next(err);
        }

        if (existingUser !== null) {
            res.status(400);
            return next(new Error("Oopsies! That username already exists!"));
        }

        const newUser = new User(req.body);
        newUser.save((err, user) => {
            if (err) {
                res.status(500);
                return next(err);
            }

            const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
            return res.status(201).send({ success: true, user: user.withoutPassword(), token});
        });
    });
});

//login 
authRouter.post("/login", (req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if (err) {
            res.status(500);
            return next(err);
        } else if (!user) {
            res.status(403)
            return next(new Error("Oopsies! The username or password are incorrect!"))
        } 
        user.checkPassword(req.body.password, (err, match) => {
            if (err) return res.status(500).send(err);
            if (!match) return res.status(401).send({ message: "Oopsies! The username or password are incorrect! "});
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
            return res.send({ user: user.withoutPassword(), token, success: true })
        })
    });
});

module.exports = authRouter;
