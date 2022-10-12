<template>
  <div class="container mt-5">

    <form @submit.stop.prevent="handleSubmit" class="form-signin border border-secondary rounded p-4 m-auto" style="width: 50%; background-color: rgb(26, 21, 48);">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal text-white">Sign In</h1>
      </div>
      <div class="form-label-group text-white">
        <label for="inputName">User</label>
        <input v-model="name" type="text" name="name" class="form-control" placeholder="name" autofocus>
      </div>
      <div class="form-label-group text-white mt-4">
        <label for="inputPassword">Password</label>
        <input v-model="password" type="password" name="password" class="form-control" placeholder="Password">
      </div>
      <br />
      <button class="btn btn-lg btn-success btn-block" type="submit" :disabled="isProcessing">Submit</button>
    </form>

  </div>
</template>

<script>
import authorizationAPI from './../apis/authorization'
import { ToastBottom } from '../utils/helpers';

export default {
  data() {
    return {
      name: '',
      password: '',
      isProcessing: false
    }
  },
  methods: {
    async handleSubmit() {
      try {

        if (!this.name || !this.password) {
          ToastBottom.fire({
            icon: 'warning',
            title: '請填入 email 和 password'
          })
          return
        }

        this.isProcessing = true

        // 使用 authorizationAPI 的 signIn 方法
        // 並且帶入使用者填寫的 email 和 password
        const response = await authorizationAPI.signIn({
          name: this.name,
          password: this.password
        })

        const { data } = response

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        console.log('data', data)

        // 將 token 存放在 localStorage 內
        localStorage.setItem('token', data.token)

        //將資料傳到 vuex 中
        this.$store.commit('setCurrentUser', data.user)

        // 成功登入後轉址到餐聽首頁
        this.$router.push('/restaurants')
      } catch (error) {
        this.password = ''
        this.isProcessing = false

        ToastBottom.fire({
          icon: 'warning',
          title: '請確認您輸入了正確的帳號密碼'
        })
      }
    }
  },
}
</script>