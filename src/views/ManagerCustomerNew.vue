<template>
  <div class="container mt-5 bg-dark container-bprder">
    <ManagerCustomerForm @after-submit="handleAfterSubmit" />
  </div>
</template>

<script>
import ManagerCustomerForm from '../components/ManagerCustomerForm.vue';
import managersAPI from '../apis/managers';
import { ToastBottom } from '../utils/helpers';
export default {
  components: { ManagerCustomerForm },
  methods: {
    async handleAfterSubmit(formData) {
      try {
        const { data } = await managersAPI.customers.create(formData)

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.$router.push({ name: 'manager-customers' })
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
.container-bprder {
  border: 5px solid rgb(97, 134, 190);
  border-radius: 20px;
}
</style>