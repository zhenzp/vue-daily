import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 定义状态
const store = new Vuex.Store({
    state: {
        name: 0
    },
    mutations: {
        changeName(state, msg) {
            console.log(state.name + msg);
            state.name += 1;
            return state.name + msg;
        }
    }
});

export default store;
