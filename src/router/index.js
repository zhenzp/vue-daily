import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: resolve => {
                require(['@/views/userInfo/userInfo'], resolve);
            }
        },
        {
            path: '/hello',
            name: 'HelloWorld',
            component: resolve => {
                require(['@/components/HelloWorld'], resolve);
            }
        },
        {
            path: '/test',
            name: 'test',
            component: resolve => {
                require(['@/components/test'], resolve);
            }
        }
    ]
});
