<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar.vue';
export default {
  name: "App",
  components: { Navbar }
}
</script>

