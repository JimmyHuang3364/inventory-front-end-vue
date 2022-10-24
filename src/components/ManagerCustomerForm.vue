<template>
  <div class="m-3 pb-3">
    <h1 class="text-white">{{initialCustomer.name ? "修改発注人" : "新增発注人"}}</h1>
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">名稱<span class="text-danger ml-1" style="font-size: 10px;">(必填)</span></label>
        <input type="text" class="form-control" name="name" id="name" :value=initialCustomer.name required>
      </div>

      <div class="form-group">
        <label for="address">地址</label>
        <input type="text" class="form-control" name="address" id="address" :value=initialCustomer.address placeholder="">
      </div>
      <div class="form-group">
        <label for="tel">電話</label>
        <input type="text" class="form-control" name="tel" id="tel" :value=initialCustomer.tel placeholder="">
      </div>

      <div class="form-group">
        <label for="fax">FAX</label>
        <input type="text" class="form-control" name="fax" id="fax" :value=initialCustomer.fax>
      </div>

      <div class="form-group">
        <label for="photo">圖片連結</label>
        <input type="text" class="form-control" name="photo" id="photo" :value=initialCustomer.photo>
      </div>
      <div class="d-flex justify-content-end">
        <button type="submit" class="btn btn-primary mt-3">送出</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    initialCustomer: {
      type: Object,
      default: () => ({
        name: '',
        address: '',
        tel: '',
        fax: '',
        photo: ''
      }),
    },
  },
  methods: {
    handleSubmit(e) {
      const form = e.target
      const formData = new FormData(form)
      this.$emit('after-submit', formData)
    }
  },
}
</script>

<style scoped>
label {
  color: #FFF;
}
</style>