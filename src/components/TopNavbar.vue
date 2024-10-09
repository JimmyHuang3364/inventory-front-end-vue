<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: rgb(36, 36, 36);">
    <router-link :to="{ name: homePageLinkName }" class="navbar-brand" style="font-weight: bold;">
      <h2>{{ titleName }}</h2>
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <template v-if="isAuthenticated">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">

          <li class="nav-item">
            <router-link :to="{ name: 'warehouse-home' }" class="nav-link">倉庫</router-link>
          </li>

          <template v-if="currentUser.permissionLevel === 2 || currentUser.permissionLevel === 1">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">管理清單</a>
              <div class="dropdown-menu">
                <router-link :to="{ name: 'manager-customers' }" class="dropdown-item">発注人</router-link>
                <router-link :to="{ name: 'manager-partner-factories' }" class="dropdown-item">協力廠商</router-link>
                <!-- <router-link :to="{ name: 'manager-Stamping_Dies' }" class="dropdown-item">模具管理_test</router-link> -->
                <router-link :to="{ name: 'manager-part-numbers' }" class="dropdown-item">部品</router-link>
                <router-link :to="{ name: 'manager-warehousing-histories' }" class="dropdown-item">出入庫歷史清單</router-link>
                <router-link :to="{ name: 'manager-production-process-items' }" class="dropdown-item">製程項目管理</router-link>
              </div>
            </li>
          </template>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">其它</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <router-link :to="{ name: 'users-change-password' }" class="dropdown-item" href="/user/password">變更密碼</router-link>
            </div>
          </li>

          <template v-if="currentUser.permissionLevel === 1">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">後台管理</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <router-link :to="{ name: 'manager-users' }" class="dropdown-item">使用者清單</router-link>
              </div>
            </li>
          </template>

        </ul>
      </div>
    </template>


    <button v-if="isAuthenticated" @click="logout" class="btn btn-outline-danger my-2 my-sm-0">登出</button>

  </nav>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router';
import { useUserStore } from '../stores/userStore';
import { storeToRefs } from 'pinia';

const router = useRouter();
const route = useRoute();
const userStore = useUserStore();
const { currentUser, isAuthenticated } = storeToRefs(userStore);

const titleName = ref<string>('');
const homePageLinkName = ref<string>('');

const logout = () => {
  userStore.revokeAuthentication();
  router.push({ name: 'sign-in' });
}

const switchTitleName = () => { //轉換Navbar titleName
  if (route.path.includes('personalPractise')) {
    titleName.value = '個人練習作品'
    homePageLinkName.value = 'personalPractise'
  } else {
    titleName.value = '明盛企業社'
    homePageLinkName.value = 'warehouse-home'
  }
}

watch(
  () => route.path,
  () => {
    switchTitleName()
  }
)

</script>