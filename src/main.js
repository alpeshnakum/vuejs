import Vue from 'vue';
import App from './App.vue';
import vueRouter from 'vue-router';
import vueHome from './components/home';
import vueAbout from './components/about';
import vueContact from './components/contact';
import vueSettings from './components/settings';
import vueUser from './components/user';

Vue.config.productionTip = false

Vue.filter("flt_upperCase", function (val) {
    return val.toUpperCase();
});

Vue.filter("flt_toInr", function (val) {
    return val * 80;
});

// ================= content for vue router =================

Vue.use(vueRouter);
const routes = [
    { path: '/', component: vueHome },
    { path: '/about', component: vueAbout },
    { path: '/contact', component: vueContact },
    { path: '/settings', component: vueSettings },
    { path: '/user/:id', component: vueUser },
];

const router = new vueRouter({routes});

// ==========================================================

new Vue({
    router: router,
    render: h => h(App),
}).$mount('#app')
