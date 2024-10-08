<template>
  <div class="container mt-5 container-border bg-dark">
    <form @submit.stop.prevent="handleSubmit" class="form-signin p-4 m-auto">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal text-white">Sign In</h1>
      </div>
      <div class="form-label-group text-white">
        <label for="inputName">User</label>
        <input v-model="name" type="text" name="name" class="form-control" placeholder="name" autofocus autocomplete="username">
      </div>
      <div class="form-label-group text-white mt-4">
        <label for="inputPassword">Password</label>
        <input v-model="password" type="password" name="password" class="form-control" placeholder="Password" autocomplete="current-password">
      </div>
      <br />
      <button class="btn btn-lg btn-success btn-block" type="submit" :disabled="isProcessing">Submit</button>
    </form>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
// import { useStore } from "vuex"
import { useRouter } from "vue-router"
import { useUserStore } from '../stores/userStore';

import authorizationAPI from './../apis/authorization'
import { ToastBottom } from '../utils/helpers'

const router = useRouter()
// const store = useStore()
const name = ref('')
const password = ref('')
const isProcessing = ref(false)
const userStore = useUserStore();

const handleSubmit = async () => {
  try {
        if (!name.value || !password.value) {
          ToastBottom.fire({
            icon: 'warning',
            title: '請填入 email 和 password'
          })
          return
        }

        isProcessing.value = true

        // 使用 authorizationAPI 的 signIn 方法
        // 並且帶入使用者填寫的 email 和 password
        const response = await authorizationAPI.signIn({
          name: name.value,
          password: password.value
        })

        const { data } = response

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        // 將 token 存放在 localStorage 內
        localStorage.setItem('token', data.token)


        userStore.fetchCurrentUser()
        // userStore.token = data.token
        //將資料傳到 vuex 中
        // store.commit('setCurrentUser', data.user)

        // 成功登入後轉址到首頁
        router.push('/warehouse/home')
      } catch (error) {
        console.log('error', error)
        password.value = ''
        isProcessing.value = false

        ToastBottom.fire({
          icon: 'warning',
          title: '請確認您輸入了正確的帳號密碼'
        })
      }
}
</script>

<style scoped>
.container-border {
  border: 5px solid rgb(97, 134, 190);
  border-radius: 20px;
}
</style>