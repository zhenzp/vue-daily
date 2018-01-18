import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'one/userInfo',
            component: resolve => {
                require(['@/views/userInfo/userInfo'], resolve);
            }
        },
        {
            path: '/add',
            name: 'one/add',
            component: resolve => {
                require(['@/views/addCon/add'], resolve);
            }
        },
        {
            path: '/show',
            name: 'one/show',
            component: resolve => {
                require(['@/views/showAdd/show'], resolve);
            }
        },
        {
            path: '/result',
            name: 'two/result',
            component: resolve => {
                require(['@/views/result/result'], resolve);
            }
        },
        {
            path: '/upload',
            name: 'three/upload',
            component: resolve => {
                require(['@/views/upload/index'], resolve);
            }
        }
    ]
});
