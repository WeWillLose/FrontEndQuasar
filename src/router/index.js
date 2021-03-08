import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
import user from '../store/user/index'
import routes from './routes'
import {mapGetters} from 'vuex'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */
 const freePath = ["/login"]
 // function (/* { store, ssrContext } */) {
const router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,


    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    base: process.env.VUE_ROUTER_BASE
  })

// }

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  let loggedIn = false;
  try{
    loggedIn = localStorage.getItem('is_login') == "true";
  }catch (e) {
    console.error("In beforeEach" + e)
  }

  if (authRequired && !loggedIn) {
    return next('/login');
  }
  next();
})

export default router
