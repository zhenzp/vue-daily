import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'welcome',
            component: resolve => {
                require(['@/views/welcome'], resolve);
            }
        },
        {
            path: '/userInfo',
            name: 'userInfo',
            // redirect: { name: 'welcome' },
            component: resolve => {
                require(['@/views/userInfo/userInfo'], resolve);
            }
        },
        {
            path: '/add',
            name: 'add',
            component: resolve => {
                require(['@/views/addCon/add'], resolve);
            }
        },
        {
            path: '/show',
            name: 'show',
            component: resolve => {
                require(['@/views/showAdd/show'], resolve);
            }
        },
        {
            path: '/result',
            name: 'result',
            component: resolve => {
                require(['@/views/result/result'], resolve);
            }
        },
        {
            path: '/upload',
            name: 'upload',
            component: resolve => {
                require(['@/views/upload/index'], resolve);
            }
        }
    ]
});
