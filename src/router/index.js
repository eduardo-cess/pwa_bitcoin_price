import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/HomeView'
import AboutView from '@/components/AboutView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/sobre',
      name: 'AboutView',
      component: AboutView
    }
  ]
})
