import Vue from 'vue'
import Router from 'vue-router'
import vContactList from './components/vContactList'
import vContactUser from './components/vContactUser'

Vue.use(Router)
//used router to navigate and create SPA model
const router = new Router({
  routes: [
    {
      path: '/',
      name:'contact-list',
      component: vContactList,
    },
    {
      path: '/contact-list/user-info',
      name:'contact-list-info',
      component: vContactUser,
      props: true,
    },
  ]
})

export default router;
