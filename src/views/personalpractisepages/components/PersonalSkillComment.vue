<template>
  <div class="personal-skill-comment t-mt-5 t-mb-10 t-border-t t-border-[#999999]">
    <p class="t-font-bold">目前個人專案</p>
    <p class="t-mt-3">－ 前端部分從 Vue 2 成功升級至 Vue 3，並將打包工具從 Webpack 切換至 Vite，狀態管理也從 Vuex 轉換為 Pinia，也開始將專案一部分轉換為 TypeScript，進一步增強代碼的穩定性與可維護性。</p>
    <p class="t-mt-3">－ 後端部分使用 Express 框架建立，資料庫使用 Mysql，並託管在 <a href="https://railway.app/" target="_blank">Railway</a> 上。</p>
    <div class="t-flex t-flex-col t-mt-3">
      <a href="https://github.com/JimmyHuang3364/inventory-front-end-vue" target="_blank">前端github連結</a>
      <a href="https://github.com/JimmyHuang3364/inventory-" target="_blank">後端github連結</a>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
<style>
  .personal-skill-comment {
    a {
      color:rgb(49, 49, 255)
    }
  }

  .dark-mode {
    .personal-skill-comment {
      p{
        color: #9a9a9a;
      }
    }
  }
</style>