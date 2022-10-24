<template>
  <div class="container mt-5 bg-dark container-bprder pb-3">
    <h1 class="text-white mt-3">註冊新使用者</h1>
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-label-group text-white mt-4">
        <label for="name">User</label>
        <input type="text" name="name" class="form-control " value="" autofocus required>
      </div>
      <div class="form-label-group text-white mt-4">
        <label for="permissionLevel">使用權限 (0 訪客、1 管理者、2 維護者、3 一般使用者)</label>
        <select v-model="test" class="custom-select" name="permissionLevel" id="permissionLevel" aria-label="Example select with button addon" required>
          <option selected>Choose...</option>
          <option value="0">訪客</option>
          <option value="1">管理者</option>
          <option value="2">維護者</option>
          <option value="3">一般使用者</option>
        </select>
      </div>
      <br />
      <div class="d-flex justify-content-end">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import managersAPI from '../apis/managers';
import { ToastBottom } from '../utils/helpers';

export default {
  name: 'ManagerUserSignup',
  methods: {
    async handleSubmit(e) {
      try {
        const form = e.target
        const formData = new FormData(form)
        const { data, statusText } = await managersAPI.users.create(formData)
        if (statusText !== 'OK' || data.status !== 'success') { throw new Error(data.message) }
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
form label {
  color: aliceblue
}

.container-bprder {
  border: 5px solid rgb(97, 134, 190);
  border-radius: 20px;
}
</style>