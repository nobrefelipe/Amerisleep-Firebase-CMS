/* DEPENDENCIES */
import Vue from 'vue';

import Vuex from 'vuex';

import App from './App';

import VueResource from 'vue-resource';

import store from './vuex/store';

import router from './router';

import firebaseApp from './firebase';

import sortable from './directives/sortable';

const AUTH = firebaseApp.auth();


/* USE */
Vue.use(VueResource);

Vue.use(Vuex);

Vue.config.productionTip = false;

//set http root
Vue.http.options.root = 'https://amerisleep-cms.firebaseapp.com';


// Before each route
router.beforeEach((to, from, next) => {

  // If route is protected
  if (to.matched.some(record => record.meta.requiresAuth)) {

    // If user is not authenticated
    if (!AUTH.currentUser) {

      // Redirect to Login
      next({name: 'Login'});

    } else {

      // Otherwise proceed
      next();

    }

  } else {

    // Authentication not required, go on
    next();

  }

});


const unsubscribe = AUTH.onAuthStateChanged(() => {

  new Vue({

    el: '#app',

    router,

    store,

    directives:{ sortable },

    beforeMount(){

      // dispatch ACTION to UPDATE the SIZES in the STORE
      //this.$store.dispatch('add_new_size');

    },

    template: '<App/>',

    components: { App },

  });

  // remove this listener so that we aren't trying to make new vue objects
  // every time the auth state changes.
  unsubscribe();

});

