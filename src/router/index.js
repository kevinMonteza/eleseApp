import Vue from 'vue'
import Router from 'vue-router'
import ViewForm from '@/views/viewForm'
import viewAdmin from '@/views/viewAdmin'
import Update from '@/components/Update'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'viewForms',
      component: ViewForm
    },
    {
      path: '/admin',
      name: 'viewAdmin',
      component: viewAdmin
    },
    {
      path: '/update',
      name: 'Update',
      component: Update
    }
  ]
})
