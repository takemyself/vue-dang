import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/common/Layout'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [
    {
      path: '/',
      name: '首页',
      redirect: '/index',
      component: Layout,
      children: [
        {
          path: 'index',
          component: _import('index/Index')
        },
        {
          path: 'sub',
          component: _import('index/Sub')
        }
      ]
    },
    {
      path: '/contact',
      name: '联系我们',
      redirect: '/contact/index',
      component: Layout,
      children: [{
        path: 'index',
        component: _import('contact/Contact')
      }]
    },
    {
      path: '/server',
      name: '服务商',
      redirect: '/server/company',
      component: Layout,
      children: [
        {
          path: 'company/:cid',
          component: _import('server/Company')
        },
        {
          path: 'intro/:sid',
          component: _import('server/Intro')
        },
        {
          path: 'sub',
          component: _import('server/Sub')
        }
      ]
    },
    {
      path: '/news',
      name: 'news',
      component: Layout,
      redirect: '/news/lists',
      children: [
        {
          path: 'lists',
          component: _import('news/Newslist')
        },
        {
          path: 'content/:nid',
          component: _import('news/Newscontent')
        }
      ]
    },
    {
      path: '/about',
      name: '关于我们',
      redirect: '/about/index',
      component: Layout,
      children: [{
        path: 'index',
        component: _import('about/About')
      }]
    },
    {
      path: '/login',
      name: 'Login',
      component: Layout,
      redirect: '/login/index',
      children: [{
        path: 'index',
        component: _import('regislogin/Login')
      }]
    },
    {
      path: '/regis',
      name: 'Regis',
      component: Layout,
      redirect: '/regis/index',
      children: [{
        path: 'index',
        component: _import('regislogin/Regis')
      }]
    }
  ]
})
