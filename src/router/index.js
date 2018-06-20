import Vue from 'vue';
import Router from 'vue-router';
import Edit from '../components/edit/index.vue';
import Products from '../components/products/index.vue';
import Login from '../components/login/index.vue';

Vue.use(Router);

export default new Router({

  mode: 'history',

  routes: [

    {
      path: '/amerisleep-cms/:product/edit',
      name: 'Edit',
      component: Edit,
      meta: { requiresAuth: true }

    },


    {
      path: '/amerisleep-cms/login',
      name: 'Login',
      component: Login
    },

    {
      path: '/amerisleep-cms/',
      name: 'Products',
      component: Products,
      meta: { requiresAuth: true }
    }

  ]

})
