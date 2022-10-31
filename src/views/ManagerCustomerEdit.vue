<template>
  <div class="container mt-5 bg-dark container-bprder">
    <ManagerCustomerForm :initial-customer="customer" @after-submit="handleAfterSubmit" :is-processing="isProcessing" />
  </div>
</template>

<script>
import managersAPI from '../apis/managers'
import ManagerCustomerForm from '../components/ManagerCustomerForm.vue';
import { ToastBottom } from '../utils/helpers';
export default {
  name: 'ManagerCustomerEdit',
  beforeRouteUpdate(to, from, next) {
    const customerId = to.params.id
    this.fetchCustomerData(customerId)
    next();
  },
  created() {
    const customerId = this.$route.params.id
    this.fetchCustomerData(customerId)
  },
  components: { ManagerCustomerForm },
  data() {
    return {
      customer: {},
      isProcessing: false
    }
  },
  methods: {
    async fetchCustomerData(customerId) {
      try {
        const { data, statusText } = await managersAPI.customers.getDetail(customerId)
        if (statusText !== 'OK' || data.status === 'error') { throw new Error(data.message) }
        const { customer } = data
        this.customer = customer
      } catch (error) {
        ToastBottom.fire({
          icon: 'error',
          title: error
        })
      }
    },
    async handleAfterSubmit(formData) {
      try {
        this.isProcessing = true
        const customerId = this.$route.params.id
        const { data, statusText } = await managersAPI.customers.update({ customerId, formData })
        if (statusText !== 'OK') { throw new Error(data.message) }
        this.$router.push({ name: 'manager-customers' })
        ToastBottom.fire({
          icon: 'success',
          title: data.message
        })
        this.isProcessing = false
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