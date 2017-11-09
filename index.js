const express = require("express")
const app = express()

const path = require("path")

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, 'static/index.html'))
})

app.get("/bundle.js", (req, res) => {
	res.sendFile(path.join(__dirname, 'static/bundle.js'))
})

app.get("/bundle.css", (req, res) => {
	res.sendFile(path.join(__dirname, 'static/bundle.css'))
})

app.listen(3000, () => {console.log("HTTP server listening")})