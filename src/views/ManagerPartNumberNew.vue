<template>
  <div class="container container-border bg-dark mt-5">
    <ManagerPartNumberForm @after-submit="handleAfterSubmit" />
  </div>
</template>

<script>
import ManagerPartNumberForm from '../components/ManagerPartNumberForm.vue';
import managersAPI from '../apis/managers';
import { ToastBottom } from '../utils/helpers';
export default {
  name: 'ManagerPartNumberNew',
  components: { ManagerPartNumberForm },
  methods: {
    async handleAfterSubmit(formData) {
      try {
        const { data, statusText } = await managersAPI.partNumbers.create(formData)
        if (statusText !== 'OK' || data.status !== 'success') { throw new Error(data.message) }
        this.$router.push({ name: 'manager-part-numbers' })
        ToastBottom.fire({
          icon: 'success',
          title: data.message
        })
      } catch (error) {
        ToastBottom.fire({
          icon: 'error',
          title: error
        })
      }
    }
  },
}
</script>

<style scoped>
.container-border {
  border: 5px solid rgb(97, 134, 190);
  border-radius: 20px;
}
</style>