import { defineStore } from 'pinia';
import usersAPI from './../apis/users'

export const useUserStore = defineStore({
  id: 'userStore', // Store 的唯一 id
  state: () => ({
    currentUser: {
      id: -1 as number,
      name: '' as string,
      isAdmin: false as boolean,
      permissionLevel: -1 as number,
    },
    isAuthenticated: false as boolean,
    token: '' as string,
  }),
  getters: {
  },
  actions: {
    async fetchCurrentUser() {
      try {
        const { data } = await usersAPI.getCurrentUser();

        const { id, name, isAdmin, permissionLevel } = data;

        // 直接修改 state
        this.currentUser = { id, name, isAdmin, permissionLevel };
        this.isAuthenticated = true;  // 假設獲取用戶後認證通過

        return true;
      } catch (error: any) {
        console.error(error.message);
        return false;
      }
    },
    revokeAuthentication() {
      console.log('Authentication revoked');
      this.currentUser = {
        id: -1,
        name: '',
        isAdmin: false,
        permissionLevel: -1,
      };
      this.isAuthenticated = false;
      this.token = ''; // 登出時清空 token
      localStorage.removeItem('token'); // 登出時清空 localStorage 的 token
    }
  }
});
