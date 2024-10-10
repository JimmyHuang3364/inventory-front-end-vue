<template>
  <div class="container mt-3 d-flex flex-wrap t-gap-x-[90px]">
    <div class="card m-2 t-border-2 t-border-inherit" style="width: 18rem;">
      <img src="../../assets/personalPractise/resumeView.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">個人資訊簡歷的頁面</h5>
        <p class="card-text">就簡簡單單的簡歷，隨時增加或優化。</p>
        <router-link :to="{ name: 'personalPractise-resume' }" class="btn btn-primary">Go...</router-link>
      </div>
    </div>
    <div class="card m-2 t-border-2 t-border-inherit" style="width: 18rem;">
      <img src="../../assets/personalPractise/colorCode.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">RGB色碼表</h5>
        <p class="card-text">調出喜歡的顏色並提供色碼，Background color會隨著不同的值跟著變換。</p>
        <router-link :to="{ name: 'personalPractise-color-code' }" class="btn btn-primary">Go...</router-link>
      </div>
    </div>
    <div class="card m-2 t-border-2 t-border-inherit" style="width: 18rem;">
      <img src="../../assets/personalPractise/loaderPage.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">載入中的狀態頁面</h5>
        <p class="card-text">七彩旋轉的載入畫面</p>
        <router-link :to="{ name: 'personalPractise-loaderPage' }" class="btn btn-primary">Go...</router-link>
      </div>
    </div>
    <div class="card m-2 t-border-2 t-border-inherit" style="width: 18rem;">
      <img src="../../assets/personalPractise/inventory.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">以前端VUE3框架開發網站(簡易倉庫系統)</h5>
        <p class="card-text t-truncate">簡單的倉庫紀錄系統(紀錄出入庫、產品外包狀態、廠商管理、模具管理)因之前開發的專案經使用者提出各種想法後，我以前端框架開發更能給使用者良好操作體驗，故又另自學VUE框架並使用axios串接先前以全端開發之API再次開發簡易出入庫倉庫系統。因有帳密保護，故專案連結無法詳細展示。(可於面試時展示)</p>
        <button class="t-text-xs t-text-right t-block t-w-full t-text-cyan-600 hover:t-text-sky-200" @click="handleClick">顯示全文...</button>
        <router-link :to="{ name: 'sign-in' }" class="btn btn-primary">Go...</router-link>
      </div>
    </div>
    <div class="card m-2 t-border-2 t-border-inherit" style="width: 18rem;">
      <img src="../../assets/personalPractise/logOutAnimation.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">登出圖案</h5>
        <p class="card-text">只用 tailwind 畫出開關門小動畫，點擊後 3 秒會離開該頁。</p>
        <router-link :to="{ name: 'personalPractise-logOutAnimation' }" class="btn btn-primary">Go...</router-link>
      </div>
    </div>
    <div class="card m-2 t-border-2 t-border-inherit" style="width: 18rem;">
      <img src="../../assets/personalPractise/default.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">努力練習產出中...</h5>
        <p class="card-text">努力找目標練習產出中...</p>
        <router-link :to="{ name: 'personalPractise' }" class="btn btn-disable">努力練習產出中...</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const handleClick = (e: MouseEvent): void => {
  console.log('qweqwe')
  const target = e.target as HTMLElement;
  const previousSibling = target.previousElementSibling as HTMLElement | null;

  if (previousSibling) {
    target.innerText = target.innerText === '顯示較少...' ? '顯示全文...' : '顯示較少...'
    previousSibling.classList.toggle('t-truncate');
  }
}
</script>

<style scoped>
.btn-disable {
  background-color: #8d8d8d;
  cursor: not-allowed;
}
</style>