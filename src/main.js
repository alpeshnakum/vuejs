import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue';
import './plugins/bootstrap-vue'
import App from './App.vue';
import vueRouter from 'vue-router';
import vueHome from './components/home';
import vueAbout from './components/about';
import vueContact from './components/contact';
import vueSettings from './components/settings';
import vueUser from './components/user';
import vueNotFound from './components/pageNotFound';
// import productTitle from './components/slotsWithName.vue';
// import productDesc from './components/slotsWithName.vue';
// import productButton from './components/slotsWithName.vue';

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
    { path: '*', component: vueNotFound },
];

const router = new vueRouter({routes});

// ==========================================================

// Globally registered components
// Vue.component('product-Title', productTitle);
// Vue.component('product-Desc', productDesc);
// Vue.component('product-Button', productButton);

new Vue({
    router: router,
    render: h => h(App),
}).$mount('#app')
