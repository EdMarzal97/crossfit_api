const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// this is for testing purposes only
app.get("/", (req, res) => {
    res.send("<h1>OHAYO SEKAI GOOD MORNING WORLD!</h1>");
});

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});