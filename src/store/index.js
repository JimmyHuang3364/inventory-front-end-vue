import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: '',
      isAdmin: false,
      permissionLevel: -1,
      token: ''
    },
    isAuthenticated: false
  },
  getters: {
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      }
      // 將使用者驗證用的 token 儲存在 state 中
      state.token = localStorage.getItem('token')
      // 將使用者的登入狀態改為 true
      state.isAuthenticated = true
    }
  },
  actions: {
    // async fatchCurrentUser(commit) {

    // }
  },
  modules: {
  }
})
