import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
        msgList:[],
        
    },
    mutations:{
        appendMessage(state,payload){
            
            console.log(payload);
            state.msgList.push(payload)
            console.log(state.msgList);
            console.log("in mutations");
        }
    },
    getters:{
        getMessage(state){
            return state.msgList ;
        },
        
    },
    actions:{
        async appendMsg({ commit },data) {
			try {
                console.log("in actions");
				commit("appendMessage",data);
			} catch (error) {
				console.log(error);
			}
		},

    }
})
