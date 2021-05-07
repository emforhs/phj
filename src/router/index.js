import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import store from '../store/index';

Vue.use(VueRouter)

if(window.localStorage.getItem('layout')){
  store.dispatch('layout/setLayout',JSON.parse(window.localStorage.getItem('layout')));
}

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  
  Router.beforeEach((to, from, next) => {
    if(to.path!=="/login" && !window.localStorage.getItem("login")){
      next("/login");
    }else{
      next();
    }
    
  })
  
  return Router
}


