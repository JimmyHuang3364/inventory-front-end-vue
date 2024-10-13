<template>
  <div class="container mt-3 d-flex flex-wrap t-gap-x-[90px]">
    <template v-for="(_practice, _index) in myPractices" :key="_index">
      <div class="card m-2 t-border-2 t-border-inherit" style="width: 18rem;">
        <img :src="getImageUrl(_practice.imgNmae)" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{ _practice.title }}</h5>
          <p class="card-text t-truncate" :class="`practice-${_index}`">{{ _practice.description }}</p>
          <button v-show="_practice.showMoreBtn" class="t-text-xs t-text-right t-block t-w-full t-text-cyan-600 hover:t-text-sky-200" @click="func_handleClick">顯示全文...</button>
          <router-link :to="{ name: _practice.routerNmae }" class="btn btn-primary">Go...</router-link>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { getImageUrl } from '../../utils/common';

interface MyPractices {
  title: string
  imgNmae: string
  description: string
  routerNmae: string
  showMoreBtn: boolean
}

const myPractices = reactive<MyPractices[]>([
  {
    title: '個人資訊簡歷的頁面',
    imgNmae: 'resumeView.jpg',
    description: '一些簡單特效，及我的個人資訊。',
    routerNmae: 'personalPractise-resume',
    showMoreBtn: false
  },
  {
    title: 'RGB色碼表',
    imgNmae: 'colorCode.jpg',
    description: '調出喜歡的顏色並提供色碼，Background color會隨著不同的值跟著變換。',
    routerNmae: 'personalPractise-color-code',
    showMoreBtn: false
  },
  {
    title: '載入中的狀態頁面',
    imgNmae: 'loaderPage.jpg',
    description: '七彩旋轉的載入畫面。',
    routerNmae: 'personalPractise-loaderPage',
    showMoreBtn: false
  },
  {
    title: '以前端VUE3框架開發網',
    imgNmae: 'inventory.jpg',
    description: '此系統於小公司實際持續運作中(非展示功能)。以VUE3框架搭配各式套件(vite、VueRouter、bootstrap、sweet alert、pinia、tailwind...等)進行開發。簡單的倉庫紀錄系統(紀錄出入庫、產品外包狀態、廠商管理、模具管理)因之前開發的專案經使用者提出各種想法後，我以前端框架開發更能給使用者良好操作體驗，故又另自學VUE框架並使用axios串接先前以全端開發之API再次開發簡易出入庫倉庫系統。因有帳密保護，故專案連結無法詳細展示。(可於面試時展示)',
    routerNmae: 'sign-in',
    showMoreBtn: false
  },
  {
    title: '登出圖案',
    imgNmae: 'logOutAnimation.jpg',
    description: '只用 tailwind 畫出開關門小動畫，點擊後 3 秒會離開該頁。',
    routerNmae: 'personalPractise-logOutAnimation',
    showMoreBtn: false
  },
  {
    title: '不同的展示所有作品方式',
    imgNmae: 'PersonalPractiseGeneral.jpg',
    description: '使用 swiper 套件。',
    routerNmae: 'PersonalPractiseGeneral',
    showMoreBtn: false
  },
])
const func_handleClick = (e: MouseEvent): void => {
  const target = e.target as HTMLElement;
  const previousSibling = target.previousElementSibling as HTMLElement | null;

  if (previousSibling) {
    target.innerText = target.innerText === '顯示較少...' ? '顯示全文...' : '顯示較少...'
    previousSibling.classList.toggle('t-truncate');
  }
}

// 檢查是否須顯示 more btn
const func_showMoreBtn = () => {
  for (let i = 0; i < myPractices.length; i++) {
    const targetEl = document.querySelector(`.practice-${i}`) as HTMLElement;
    if (targetEl.scrollWidth > targetEl.clientWidth) {
      myPractices[i].showMoreBtn = true;
    } else {
      myPractices[i].showMoreBtn = false;
    }
  }
}

onMounted(() => {
  func_showMoreBtn()
})
</script>

<style scoped>
.btn-disable {
  background-color: #8d8d8d;
  cursor: not-allowed;
}
</style>