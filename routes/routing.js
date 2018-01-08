const express = require("express");
const router = express.Router();
const path = require("path"); // relative windows or Mac


// Define any routes

// app.get()
// app.post()

// router.get();
// router.post();

router.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, "/../public/index.html"));
});

router.get("/accimeesterlin", (req, res) => {

    res.json("You are currently viewing my profile");
});

router.get("/expressjs", (req, res) => {
    res.json("You are viewing express");
});


// Full Stack
    // Front End
    // Back End

// What is post? 
    // Receive what the client is sending



// Why are we using it?
    // Get information, and then process and always send a response

router.post('/user', (req, res) => {
    // req to receive stuff from the client or browser
    const {username, address} = req.body;
    const user = {
        username,
        address
    };

    // res to send stuff to the browser
    res.json({ msg: "We receive your data", data: user});
})



// Page Not Found
router.get("*", (req, res) => {
    res.json("Page not found");
});


module.exports = router;