import { createRouter, createWebHashHistory } from 'vue-router'

const routerHistory = createWebHashHistory()

import HomePage from './pages/home'
import AboutPage from './pages/about'
import NotFoundPage from './pages/notFound'
import _itemAlias from './pages/_itemAlias'

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/:itemAlias',
      name: 'alias',
      component: _itemAlias
    },
    {
      path: '/:status(404)',
      name: '404',
      component: NotFoundPage
    }
  ]
})

export default routers
