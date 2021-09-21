import { io } from "socket.io-client";
import { store } from "../store";
class SocketioService {
	socket;
	constructor() {}

	setupSocketConnection() {
		this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT);
	}
	disconnect(username) {
		if (this.socket) {
			console.log("in unset username");
			// this.socket.emit('unset username',username);
			this.socket.disconnect(username);
		}
	}
	sendMsg(data,name) {
		
		this.socket.emit("my message", [data,name]);
		this.checkMsg();
	}
	checkMsg(){
		this.socket.off('my broadcast').on("my broadcast", (data) => {
			console.log(data);
			try{
				store.dispatch('appendMsg',data);
			}
			catch{
				console.log("socket is not able to access store");
			}
			
		});
	}
	setUserName(username){
		this.socket.emit("set username",username);
		this.checkMsg();
	}
	
}

export default new SocketioService();
