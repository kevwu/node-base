let express = require("express")
let app = express()
let http = require("http")
let path = require("path")
let fs = require("fs")

app.use(express.static(path.join(__dirname,"static")));

let server = http.createServer(app).listen(8080, function()
{
        console.log("HTTP server listening.");
})


app.get("/", (req, res) => {
        res.sendFile("static/index.html")
})

