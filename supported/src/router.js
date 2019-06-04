import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/HomePage';
import CatalogueList from '@/views/CatalogueList';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: HomePage },
    { path: '/catalogue', component: CatalogueList }
  ]
})
