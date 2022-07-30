const express = require("express");

const v1Router = require("./version-1/routes");

const app = express();
const PORT = process.env.PORT || 3000;

// this is for testing purposes only
//app.get("/", (req, res) => {
//    res.send("<h1>GOOD MORNING WORLD!</h1>");
//});

app.use("/api/v1", v1Router);

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});