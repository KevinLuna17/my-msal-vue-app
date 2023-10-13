// router/index.js

import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginLogoutButtons from '../components/LoginLogoutButtons.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    components: {
      auth: LoginLogoutButtons,
    }
  }
  // Agrega más rutas según las necesidades de tu aplicación
];

const router = new VueRouter({
  routes,
});

export default router;
