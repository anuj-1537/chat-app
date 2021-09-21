<template>
	<div class="hello">
		<div class="title">
			<h1>{{ msg }}</h1>
			<img src="../assets/bot.gif" alt="bot" width="80px" height="60px" />
		</div>

		<div class="chat-window">
			<div class="chat-list-container">
				<div v-if="typeof currentUsername != undefined && currentUsername.length!=0" id="username">Hi {{currentUsername}}</div>
				<ul class="chat-list" v-if="typeof msgList!=undefined && msgList.length != 0">
					<li
						class="message"
						v-for="(msg, index) in msgList"
						:key="index"
					>
						<span v-if="msg.startsWith('_user_:')" class="black-bg">
							{{msg | removeKey}}
							</span>
							<span v-if="!msg.startsWith('_user_:')" class="white-bg">
							{{msg }}
							</span>
						<!-- :class="index % 2 != 0 ? 'black-bg' : 'white-bg'"
							>{{ msg }} -->
						<br />
					</li>
				</ul>
			</div>
			<div class="chat-input-container">
				<div v-if="currentUsername.length == 0" id="form">
					<input
						type="text"
						name="username"
						v-model="username"
						@keyup.enter="setUsername()"
						placeholder="enter your username"
					/>
					<button @click="setUsername()()">Send</button>
				</div>
				<div v-else id="form">
					<input
						type="text"
						name="message"
						v-model="message"
						@keyup.enter="sendMsg()"
					/>
					<button @click="sendMsg()">Send</button>
				</div>

				
			</div>
		</div>
	</div>
</template>

<script>
// import { nlp } from "../nlp";
import SocketioService from "../services/socketio.service";
export default {
	name: "Chatbox",
	data() {
		return {
			message: "",
			username: "",
			currentUsername:"",
			totalUsers:[],
			// MY_TOKEN: "KGTIWVV5DYIS2NASXEQXD37QN5L63IIR",
		};
	},
	props: {
		msg: String,
	},
	methods: {
		sendMsg() {
			if (this.message != "") {
				SocketioService.sendMsg(this.message,this.currentUsername);
				//console.log(x+ " card91");
				this.message = "";
				let x = document.getElementsByClassName("message");
				console.log(x.length);
				x[x.length-1].scrollIntoView();

				console.log("in send msg");
			}
		},
		setUsername() {
			
			this.currentUsername=this.username
			console.log("in set username");
			SocketioService.setUserName(this.currentUsername);
			setTimeout(()=>{
				document.getElementById("username").style.visibility = "hidden";
			},2000);
			this.totalUsers.push(this.currentUsername);
		},
	},
	created() {
		SocketioService.setupSocketConnection();
		this.username = "";
		this.currentUsername=""
	},
	beforeUnmount() {
		SocketioService.disconnect(this.currentUsername);
	},
	computed:{
		msgList(){
			
			console.log("total msg are :",this.$store.getters.getMessage.length );
			return this.$store.getters.getMessage ;
		}
	},
	filters:{
		removeKey(value){
			return value.slice(7);
		}
	}
	
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media screen and (min-width: 400px) and (max-width: 760px) {
	*{
		margin: 0;
		padding: 0;
		overflow:hidden;
	}
  .chat-window, .chat-list-container, .chat-list {
    width: 100%; /* The width is 100%, when the viewport is 800px or smaller */
  }
  .hello{
	display: flex;
	flex-direction: column;
  }
  button{
	background-color: red;
  }
  .chat-window {
	border: 3px solid tomato;
	border-radius: 4px;
	width: 40%;
	margin-left: 180px;
	padding: 20px;
	height: 300px;
}

.title {
	display: flex;
	flex-direction: row;
	justify-content: center;
}
button {
	background-color: #42b983;
	padding: 7px;
	border: none;
	margin-left: 10px;
	border-radius: 4px;
	position: absolute;
	top: 415px;
	left: 400px;
}
button:hover {
	transform: scale(1.1);
}
input[type="text"] {
	position: absolute;
	top: 420px;
	right: 280px;
}
.chat-list {
	display: flex;
	flex-direction: column;
}

.white-bg {
	color: black;
	background-color: whitesmoke;
	text-align: right;
	margin: 50px;
	vertical-align: text-bottom;
}
@font-face {
	font-family: myFirstFont;
	src: url("https://fonts.googleapis.com/css2?family=Encode+Sans+Semi+Condensed:wght@300&display=swap");
}
.black-bg {
	background-color: lightgrey;
	color: blue;
	text-align: left;
	margin: 50px;
	font-family: myFirstFont;
	vertical-align: text-bottom;
}
.chat-list-container {
	overflow: auto;
	height: 200px;
}
/* width */
::-webkit-scrollbar {
	width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
	box-shadow: inset 0 0 5px grey;
	border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
	background: violet;
	border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
	background: violet;
}
#username{
	background-color: black;
	color: white;
	margin-top: 0;
}

#form{
	display: flex;
	flex-direction: column;
}

}
@media screen and (min-width: 701px){
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}

.chat-window {
	border: 3px solid tomato;
	border-radius: 4px;
	width: 40%;
	margin-left: 400px;
	padding: 20px;
	height: 300px;
}

.title {
	display: flex;
	flex-direction: row;
	justify-content: center;
}
button {
	background-color: #42b983;
	padding: 7px;
	border: none;
	margin-left: 10px;
	border-radius: 4px;
	position: absolute;
	top: 415px;
	left: 800px;
}
button:hover {
	transform: scale(1.1);
}
input[type="text"] {
	position: absolute;
	top: 420px;
	right: 650px;
}
.chat-list {
	display: flex;
	flex-direction: column;
}

.white-bg {
	color: black;
	background-color: whitesmoke;
	text-align: right;
	margin: 50px;
	vertical-align: text-bottom;
}
@font-face {
	font-family: myFirstFont;
	src: url("https://fonts.googleapis.com/css2?family=Encode+Sans+Semi+Condensed:wght@300&display=swap");
}
.black-bg {
	background-color: lightgrey;
	color: blue;
	text-align: left;
	margin: 50px;
	font-family: myFirstFont;
	vertical-align: text-bottom;
}
.chat-list-container {
	overflow: auto;
	height: 200px;
}
/* width */
::-webkit-scrollbar {
	width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
	box-shadow: inset 0 0 5px grey;
	border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
	background: violet;
	border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
	background: violet;
}
#username{
	background-color: black;
	color: white;
	margin-top: 0;
}


}

</style>
