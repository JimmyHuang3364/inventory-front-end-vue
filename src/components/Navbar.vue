<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: rgb(36, 36, 36);">
    <a class="navbar-brand" style="font-weight: bold;" href="/">
      <h2>明盛公司</h2>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">

        <li class="nav-item">
          <router-link :to="{name: 'warehouse-part-numbers'}" class="nav-link">倉庫</router-link>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">管理清單</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="/manager/customers">発注人</a>
            <a class="dropdown-item" href="/manager/partnumbers">部品</a>
            <a class="dropdown-item" href="/manager/WarehousingHistories">出入庫歷史清單</a>
          </div>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">其它</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="/user/password">變更密碼</a>

            <a class="dropdown-item" href="/admin/signup">註冊使用者</a>

          </div>
        </li>

      </ul>
    </div>

    <button v-if="isAuthenticated" @click="logout" class="btn btn-outline-danger my-2 my-sm-0">登出</button>

  </nav>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'currentUser',
      'isAuthenticated',
    ])
  },
  methods: {
    logout() {
      this.$store.commit('revokeAuthentication')
      this.$router.push('/signin')
    }
  },

}
</script>