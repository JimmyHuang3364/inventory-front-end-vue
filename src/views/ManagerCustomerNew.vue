<template>
  <div class="container mt-5 bg-dark container-bprder">
    <ManagerCustomerForm @after-submit="handleAfterSubmit" :is-processing="isProcessing" />
  </div>
</template>

<script>
/*eslint-disable */
import ManagerCustomerForm from '../components/ManagerCustomerForm.vue';
import managersAPI from '../apis/managers';
import { ToastBottom } from '../utils/helpers';
export default {
  components: { ManagerCustomerForm },
  data() {
    return {
      isProcessing: false
    }
  },
  methods: {
    async handleAfterSubmit(formData) {
      try {
        this.isProcessing = true
        const { data } = await managersAPI.customers.create(formData)
        if (data.status === 'error') {
          throw new Error(data.message)
        }
        this.isProcessing = false
        this.$router.push({ name: 'manager-customers' })
      } catch (error) {
        ToastBottom.fire({
          icon: 'error',
          title: error
        })
        this.isProcessing = false
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