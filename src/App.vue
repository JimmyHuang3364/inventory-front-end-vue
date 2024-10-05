<template>
  <div id="app">
    <TopNavbar />
    <router-view v-if="isRouterAlive" />
  </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import TopNavbar from './components/TopNavbar.vue';
export default {
  name: "App",
  components: { TopNavbar },
  provide() {
    return {
      reload: this.reload
    }
  },

  data() {
    return {
      isRouterAlive: true
    }
  },

  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      });
    }
  },
}
</script>

