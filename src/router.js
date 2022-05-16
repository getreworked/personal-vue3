import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',

  routes: [
    {
      path: '/',
      redirect: '/work'
    },
    {
      path: '/work',
      name: 'work',
      component: () => import(/* webpackChunkName: "work" */ './views/Work.vue')
    },
    {
      path: '/educate',
      name: 'educate',
      component: () => import(/* webpackChunkName: "educate" */ './views/Educate.vue')
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import(/* webpackChunkName: "experience" */ './views/Experience.vue')
    }
  ]
})
