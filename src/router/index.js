import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: resolve => {
                require(['@/views/home'], resolve);
            }
        },
        {
            path: '/hello',
            name: 'HelloWorld',
            component: resolve => {
                require(['@/components/HelloWorld'], resolve);
            }
        }
    ]
});
