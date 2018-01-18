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
            console.log(msg)
            state.name += 1;
        }
    }
});

export default store;
