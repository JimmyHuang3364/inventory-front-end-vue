import Vuex from 'vuex'
import usersAPI from './../apis/users'

export default Vuex.createStore({
  state: {
    currentUser: {
      id: -1,
      name: '',
      isAdmin: false,
      permissionLevel: -1,
    },
    isAuthenticated: false,
    token: ''
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
    },
    revokeAuthentication(state) {
      state.currentUser = {}
      state.isAuthenticated = false
      // 登出時一併將 state 內的 token 移除
      state.token = ''
      localStorage.removeItem('token')
    }
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const { data } = await usersAPI.getCurrentUser()

        const { id, name, isAdmin, permissionLevel } = data

        commit('setCurrentUser', {
          id,
          name,
          isAdmin,
          permissionLevel
        })
        return true
      } catch (error) {
        console.error(error.message)
        return false
      }
    }
  },
  modules: {
  }
});
