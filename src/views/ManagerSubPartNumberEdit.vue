<template>
  <div class="container container-border bg-dark mt-5">
    <ManagerPartNumberForm @after-submit="handleAfterSubmit" :initial-part-number="subPartNumber" />
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
    }
  },
  methods: {
    async fetchSubPartNumber(partNumberId) {
      try {
        const { data, statusText } = await managerAPI.subPartNumbers.getOneDetail(partNumberId)
        if (statusText !== 'OK') { throw new Error() }
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
        const { data, statusText } = await managerAPI.subPartNumbers.update(this.$route.params.id, formData)
        if (statusText !== 'OK') { throw new Error }
        this.$router.push({ name: 'manager-part-numbers' })
        ToastBottom.fire({
          icon: 'success',
          title: data.message
        })
      } catch (error) {
        ToastBottom.fire({
          icon: 'error',
          title: '載入錯誤，請稍後在試。'
        })
        console.log(error)
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