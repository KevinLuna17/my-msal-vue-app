<!-- App.vue -->
<template>
  <div id="app">
    <router-view /> <!-- Aquí se renderizarán los componentes de la aplicación según las rutas -->
    <LoginLogoutButtons />
  </div>
</template>

<script>
import LoginLogoutButtons from './components/LoginLogoutButtons.vue'; // Supongo que aquí tienes tu componente de autenticación

export default {
  components: {
    LoginLogoutButtons
  },
};
</script>

