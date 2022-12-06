<template>
  <div class="container container-border bg-dark mt-5">
    <ManagerPartNumberForm @after-submit="handleAfterSubmit" :initial-part-number="subPartNumber" :is-processing="isProcessing" />
  </div>
</template>

<script>
import ManagerPartNumberForm from '../components/ManagerPartNumberForm.vue';
import managerAPI from '../apis/managers'
import { ToastBottom } from '../utils/helpers'

export default {
  name: 'ManagerSubPartNumberEdit',
  components: { ManagerPartNumberForm },
  created() {
    this.fetchSubPartNumber(this.$route.params.id);
  },
  data() {
    return {
      subPartNumber: {},
      isProcessing: false
    }
  },
  methods: {
    async fetchSubPartNumber(partNumberId) {
      try {
        const { data, status, statusText } = await managerAPI.subPartNumbers.getOneDetail(partNumberId)
        if (statusText !== 'OK' && status !== 200) { throw new Error() }
        const { subPartNumber } = data
        this.subPartNumber = subPartNumber
        this.subPartNumber.isSubPartNumber = true
      } catch (error) {
        ToastBottom.fire({
          icon: 'error',
          title: '載入錯誤，請稍後在試。'
        })
      }
    },
    async handleAfterSubmit(formData) {
      try {
        this.isProcessing = true
        const { data, status, statusText } = await managerAPI.subPartNumbers.update(this.$route.params.id, formData)
        const { message } = data
        if (statusText !== 'OK' && status !== 200) { throw new Error(message ? message : '載入錯誤，請稍後在試。') }
        this.isProcessing = false
        this.$router.push({ name: 'manager-part-numbers' })
        ToastBottom.fire({
          icon: 'success',
          title: data.message
        })
      } catch (error) {
        ToastBottom.fire({
          icon: 'error',
          title: error.message
        })
        this.isProcessing = false
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