<template>
  <div class="container mt-5 bg-dark container-bprder pb-3">
    <h1 class="text-white mt-3">變更密碼</h1>
    <form @submit.stop.prevent="handleSubmit" class="">
      <div class="form-label-group text-white mt-4">
        <label for="inputPassword">{{ currentUser.name }}</label>
        <input type="text" name="name" class="form-control bg-secondary" v-model="currentUser.name" readonly required>
      </div>
      <div class="form-label-group text-white mt-4">
        <label for="inputPassword">原來密碼</label>
        <input type="password" name="password" class="form-control" placeholder="Password" required>
      </div>
      <div class="form-label-group text-white mt-4">
        <label for="inputPassword">新的密碼</label>
        <input type="password" name="newPassword" class="form-control" placeholder="New Password" required>
      </div>
      <div class="form-label-group text-white mt-4">
        <label for="inputPassword">確認新的密碼</label>
        <input type="password" name="newPasswordCheck" class="form-control" placeholder="New Password Check" required>
      </div>
      <br />
      <div class="d-flex justify-content-end">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import usersAPI from '../apis/users'
import { ToastBottom } from '../utils/helpers';
export default {
  name: 'ChangePassword',
  computed: {
    ...mapState([
      'currentUser',
    ])
  },
  methods: {
    async handleSubmit(e) {
      try {
        const form = e.target
        const formData = new FormData(form)
        const userId = this.$store.state.currentUser.id
        const { data, status, statusText } = await usersAPI.updatePassword(userId, formData)
        if (statusText !== 'OK' && status !== 200) { throw new Error(data.message) }
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

form input.bg-secondary {
  color: aliceblue
}

.container-bprder {
  border: 5px solid rgb(97, 134, 190);
  border-radius: 20px;
}
</style>