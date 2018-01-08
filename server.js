

const express = require("express");
const app = express(); // start an express app


const router = express.Router(); // futher configuration


// Define any routes

// app.get()
// app.post()

// router.get();
// router.post();



router.get('/', (request, response) => {
    response.json("Hey buddy, you are in the home page");
});


router.get("/accimeesterlin", (req, res) => {

    res.json("You are currently viewing my profile");
});


router.get("/expressjs", (req, res) => {
    res.json("You are viewing express");
});


router.get("*", (req, res) => {
    res.json("Page not found");
});


app.use("/", router);






app.listen(8080, () => {
    console.log("App is starting at port ", 8080);
}); // required







// app.get('/', (request, response) => {
//     response.json("Hey buddy, you are in the home page");
// });


// app.get("/accimeesterlin", (req, res) => {

//     res.json("You are currently viewing my profile");
// });


// app.get("/expressjs", (req, res) => {
//     res.json("You are viewing express");
// });


// app.get("*", (req, res) => {
//     res.json("Page not found");
// });