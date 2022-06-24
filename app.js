const express = require("express"),
    app = express();

var log = function (entry) {
    fs.appendFileSync(
        "/tmp/sample-app.log",
        new Date().toISOString() + " - " + entry + "\n"
    );
};

app.get("/", async (req, res) => {
    log("Received req");
    res.send("Hello");
});

app.get("/Hello", async (req, res) => {
    log("Received message req");
    res.send("Hello mdf");
});

app.listen(process.env.port || 3000, () => {
    console.log("http server listen in port: 3000");
});
