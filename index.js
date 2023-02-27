// REQUIRES
const express = require("express");
const app = express();
const port = 8000;
const fs = require("fs");

// Mapping file system paths to the app's virtual paths
app.use("/scripts", express.static("./scripts"));
app.use("/styles", express.static("./styles"));
app.use("/images", express.static("./text/images"));


app.get("/", function (req, res) {
    let doc = fs.readFileSync("./text/map.html", "utf8");

    // Send the HTTP response
    res.send(doc);
});

// For page not found (i.e., 404)
app.use(function (req, res, next) {
    res.status(404).send("<html><head><title>Page not found!</title></head><body><p>Nothing here.</p></body></html>");
});

// RUN SERVER
app.listen(port, function () {
    console.log("Server running on port " + port + "!");
});
