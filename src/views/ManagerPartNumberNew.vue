<template>
  <div class="container container-bprder bg-dark mt-5">
    <ManagerPartNumberForm />
  </div>
</template>

<script>
import ManagerPartNumberForm from '../components/ManagerPartNumberForm.vue';
export default {
  components: { ManagerPartNumberForm }
}
</script>

<style scoped>
.container-bprder {
  border: 5px solid rgb(97, 134, 190);
  border-radius: 5px;
}
</style>