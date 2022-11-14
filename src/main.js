import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter("flt_upperCase", function (val) {
    return val.toUpperCase();
});

Vue.filter("flt_toInr", function (val) {
    return val*80;
});


new Vue({
    render: h => h(App),
}).$mount('#app')
