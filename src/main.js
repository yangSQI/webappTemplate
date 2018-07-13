// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'script/font-size'
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import 'babel-polyfill'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import BScroll from 'better-scroll'

import 'style/reset.css'
import 'style/border.css'
import 'style/iconfont.css'
import 'swiper/dist/css/swiper.css'

FastClick.attach(document.body);
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
})
