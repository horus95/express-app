const express = require("express"),
    app = express();

app.get("/", async (req, res) => {
    res.send("Hello");
});

app.get("/Hello", async (req, res) => {
    res.send("Hello mdf");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("http server listen in port: 3000");
});
