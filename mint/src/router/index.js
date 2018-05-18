import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import search from '@/components/page-search'
import list from '@/components/page-list'
import detils from '@/components/page-detils'

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
    }
  ]
})
