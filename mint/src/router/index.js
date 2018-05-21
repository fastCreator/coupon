import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import search from '@/page/page-search'
import list from '@/page/page-list'
import detils from '@/page/page-detils'
import them from '@/page/page-them'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/detils',
      name: 'detils',
      component: detils
    },
    {
      path: '/them',
      name: 'them',
      component: them
    }
  ]
})
