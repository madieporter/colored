require("dotenv").config();
const express = require("express");
const Pusher = require("pusher");
const app = express();
const mongoose = require("mongoose");
const expressJwt = require("express-jwt");
const port = process.env.PORT || 7777;
const path = require("path");

const pusher = new Pusher({
    appId: '748957',
    key: 'af217167ff48aa5d1444',
    secret: '358c17923a4cb62e03bc',
    cluster: 'us3',
});

app.use(express.json());
app.use("/colored", expressJwt({ secret: process.env.SECRET }));
app.use(express.static(path.join(__dirname, "client", "build")));

app.use("/auth", require("./routes/authRoute"));
// app.use("/colored", require("./routes/colored"));

mongoose.set("useCreateIndex", true);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/colored",
    { useNewUrlParser: true }).then(() => {
        console.log("Connected to the database")
    }).catch((err) => {
        console.error(err)
    })
    

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.post("/paint", (req, res) => {
    pusher.trigger("painting", "draw", req.body);
    res.json(req.body);
});

app.use((err, req, res, next) => {
    console.error(err);
    if (err.name === "UnauthorizedError") {
        // express-jwt gives the 401 status to the err object for us
        res.status(err.status);
    }
    return res.send({ message: err.message });
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});