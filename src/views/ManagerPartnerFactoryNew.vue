<template>
  <div class="container mt-5 bg-dark container-bprder">
    <ManagerPartnerFactoryForm @after-submit="handleAfterSubmit" :is-processing="isProcessing" />
  </div>
</template>

<script>
import managersAPI from '../apis/managers';
import ManagerPartnerFactoryForm from '../components/ManagerPartnerFactoryForm.vue';
import { ToastBottom } from '../utils/helpers';
export default {
  name: 'ManagerPartnerFactoryNew',
  components: { ManagerPartnerFactoryForm, },
  data() {
    return {
      isProcessing: false
    }
  },
  methods: {
    async handleAfterSubmit(formData) {
      try {
        this.isProcessing = true
        console.log(formData)
        const { data } = await managersAPI.partnerFactories.create(formData)
        if (data.status === 'error') { throw new Error(data.message) }
        this.isProcessing = false
        ToastBottom.fire({
          icon: 'success',
          title: '新增成功'
        })
        this.$router.push({ name: 'manager-partner-factories' })
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