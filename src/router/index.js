import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Content from '@/pages/content/Content'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/content',
            name: 'Content',
            component: Content
        }
    ]
})
