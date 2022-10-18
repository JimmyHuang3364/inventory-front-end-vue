<template>
  <div class="container mt-5 bg-dark container-bprder">
    <ManagerCustomerForm />
  </div>
</template>

<script>
import ManagerCustomerForm from '../components/ManagerCustomerForm.vue';
export default {
  components: { ManagerCustomerForm }
}
</script>

<style scoped>
.container-bprder {
  border: 5px solid rgb(97, 134, 190);
  border-radius: 5px;
}
</style>