<template>
  <div class="container container-border bg-dark mt-5">
    <ManagerStampingDieForm />
  </div>
</template>

<script>
import ManagerStampingDieForm from '../components/ManagerStampingDieForm.vue';

export default {
  components: { ManagerStampingDieForm }
}
</script>

<style scoped>
.container-border {
  border: 5px solid rgb(97, 134, 190);
  border-radius: 20px;
}
</style>