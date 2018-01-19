import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 定义状态
const store = new Vuex.Store({
    state: {
        name: 0,
        menuList: [
            {
                title: '首页',
                name: 'welcome',
                key: 'welcome',
                link: '/',
                icon: 'ios-clock'
            },
            {
                title: '动作',
                name: 'action',
                key: 'action',
                icon: 'ionic',
                children: [
                    {
                        title: '用户信息',
                        name: 'userInfo',
                        key: 'userInfo',
                        link: '/antion/userInfo',
                        icon: 'loop'
                    },
                    {
                        title: '加一',
                        name: 'add',
                        key: 'add',
                        link: '/action/add',
                        icon: 'heart'
                    },
                    {
                        title: '加一结果',
                        name: 'show',
                        key: 'show',
                        link: '/action/show',
                        icon: 'wrench'
                    }
                ]
            },
            {
                title: '动作',
                name: 'actions',
                key: 'actions',
                icon: 'ionic',
                children: [
                    {
                        title: '用户信息',
                        name: 'userInfo',
                        key: 'userInfo',
                        link: '/antions/userInfo',
                        icon: 'loop'
                    },
                    {
                        title: '加一',
                        name: 'add',
                        key: 'add',
                        link: '/actions/add',
                        icon: 'heart'
                    },
                    {
                        title: '加一结果',
                        name: 'show',
                        key: 'show',
                        link: '/actions/show',
                        icon: 'wrench'
                    }
                ]
            },
            {
                title: '数据',
                name: 'data',
                key: 'data',
                icon: 'edit',
                children: [
                    {
                        title: '查询',
                        name: 'result',
                        key: 'result',
                        link: '/data/result',
                        icon: 'hammer'
                    }
                ]
            },
            {
                title: 'iview',
                name: 'iview',
                key: 'iview',
                icon: 'link',
                children: [
                    {
                        title: '上传',
                        name: 'upload',
                        key: 'upload',
                        link: '/iview/upload',
                        icon: 'compose'
                    }
                ]
            }
        ],
        path:{}
    },
    mutations: {
        changeName(state, msg) {
            console.log(msg);
            state.name += 1;
        },
        changePath(state, newPath) {
            let newObj
            state.menuList.map((item, index) => {
                if(!item.children){
                    if(item.name==newPath){
                        state.path=item
                        return
                    }
                }else{
                    item.children.map((child,index) => {
                        if(child.name==newPath){
                            newObj=Object.assign({}, item)
                            newObj.children=[newObj.children[index]]
                            state.path=newObj
                            return
                        }
                    })
                }
            })
        }
    }
});

export default store;
