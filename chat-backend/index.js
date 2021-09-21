const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
	cors: {
		origins: ["http://localhost:8080"],
	},
});

// app.get("/", (req, res) => {
// 	res.sendFile(__dirname + "/public/index.html");
// });

io.on("connection", (socket) => {
	socket.username=""
	console.log("a user connected");
	socket.on("disconnect", (username) => {
		console.log("user disconnected");
		io.emit("my broadcast", `_user_:${socket.username} is disconnected`);
	});
	// socket.on("unset username",(username)=>{
	// 	console.log(username,"is disconnected");
	// 	socket.broadcast.emit("my broadcast", `_user_:${username} is disconnected`);
		
	// });
	socket.on("my message", (msg) => {
		console.log("message: " + msg[1]+":"+msg[0]);
		io.emit("my broadcast", `${msg[1]}:${msg[0]}`);
	});
	socket.on("set username",(username)=>{
		console.log(username," has joined");
		socket.username=username
		io.emit("my broadcast", `_user_:${username} has joined`);
	})
});

server.listen(3000, () => {
	console.log("listening on 3000");
});
