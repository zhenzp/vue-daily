import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 定义状态
const store = new Vuex.Store({
    state: {
        name: 0,
        path: ['/']
    },
    mutations: {
        changeName(state, msg) {
            console.log(msg);
            state.name += 1;
        },
        changePath(state, newPath) {
            console.log(newPath)
            const pathArr=newPath.split('/')
            pathArr.unshift('/')
            console.log(pathArr)
            state.path = pathArr;
        }
    }
});

export default store;
