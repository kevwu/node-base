const express = require("express")
const app = express()
const server = require("http").Server(app)
const bodyparser = require("body-parser")

const path = require("path")


const bcrypt = require("bcrypt")

const jwt = require("jsonwebtoken")

const uuid = require("node-uuid")
const SECRET_KEY = uuid.v4()

const mysql = require("mysql")
const db = mysql.createConnection({
	host: "localhost",
	user: "appname",
	password: "appname",
	database: "appname",
})

db.connect((err) => {
	if(err) {
		throw new Error("Failed to connect to database: " + err)
	}

	console.log("Connected to database.")
})

app.use(bodyparser.urlencoded())
app.use(bodyparser.json({type: 'application/json'}))

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