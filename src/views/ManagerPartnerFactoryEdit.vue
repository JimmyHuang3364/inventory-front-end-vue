<template>
  <div class="container mt-5 bg-dark container-bprder">
    <ManagerPartnerFactoryForm @after-submit="handleAfterSubmit" :initial-partner-factory="partnerFactory" :is-processing="isProcessing" />
  </div>
</template>

<script>
/*eelint-disable */
import { ToastBottom } from '../utils/helpers';
import ManagerPartnerFactoryForm from '../components/ManagerPartnerFactoryForm.vue';
import managersAPI from '../apis/managers';


export default {
  name: 'ManagerPartnerFactoryEdit',
  components: { ManagerPartnerFactoryForm, },
  created() {
    const partnerFactoryId = this.$route.params.id
    this.fetchPartnerFactoryData(partnerFactoryId)
  },
  data() {
    return {
      partnerFactory: {},
      isProcessing: false
    }
  },
  methods: {
    async fetchPartnerFactoryData(partnerFactoryId) {
      try {
        const { data, status, statusText } = await managersAPI.partnerFactories.getOneDetail(partnerFactoryId)
        if (statusText !== 'OK' && status !== 200) { throw new Error(data.message) }
        if (data.status !== 'success') { throw new Error(data.message) }
        this.partnerFactory = data.partnerFactory
      }
      catch (error) {
        ToastBottom.fire({
          icon: 'error',
          title: error
        });
      }
    },

    async handleAfterSubmit(formData) {
      try {
        this.isProcessing = true
        const partnerFactoryId = this.$route.params.id
        const { data, status, statusText } = await managersAPI.partnerFactories.update(partnerFactoryId, formData)
        if (statusText !== 'OK' && status !== 200) { throw new Error(data.message) }
        if (data.status !== 'success') { throw new Error(data.message) }
        this.isProcessing = false
        ToastBottom.fire({
          icon: 'success',
          title: data.message
        })
        this.$router.push({ name: 'manager-partner-factories' })
      }
      catch (error) {
        ToastBottom.fire({
          icon: 'error',
          title: error
        });
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