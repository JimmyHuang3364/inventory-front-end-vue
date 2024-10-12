<template>
  <Swiper
    :onSwiper="func_setSwiperInstance"
    :initialSlide="999"
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
    :speed="switchSpeed"
    :pagination="true"
    :modules="modules"
    class="mySwiper"
  >
    <template v-for="(practice, index) in myPractices" :key="index">
      <SwiperSlide>
        <img :src="`/src/assets/personalPractise/${practice.imgName}`" />
        <div class="t-overflow-auto" :class="{'t-text-white': props.darkMode}">
          <h2>{{ practice.title }}</h2>
          <p class="t-truncate" :class="`practice-${index}`">{{ practice.description }}</p>
          <button v-show="practice.showMoreBtn" class="t-text-xs t-text-right t-block t-w-full t-text-cyan-600 hover:t-text-sky-200" @click="func_handleClick">顯示全文...</button>
          <router-link :to="{ name: 'sign-in' }" class="btn btn-primary">Go...</router-link>
        </div>
      </SwiperSlide>
    </template>
    
    <template>
      <SwiperSlide>
        <img src="../../../assets/personalPractise/default.jpg" />
        <div class="" :class="{'t-text-white': props.darkMode}">
          <h2>努力練習產出中..</h2>
          <p>努力找目標練習產出中...</p>
        </div>
        <div class="t-bg-[#8c9bab] t-text-black t-w-fit t-p-2 t-rounded" role="button">努力練習產出中...</div>
      </SwiperSlide>
    </template>
  </Swiper>
</template>

<script setup lang="ts">
import { defineProps, onMounted, ref, nextTick, reactive } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import type { Swiper as SwiperType } from 'swiper'


const modules = [EffectCoverflow, Pagination]
const props = defineProps<{darkMode: boolean}>()
const swiperInstance = ref<SwiperType | null>(null);
const switchSpeed = ref<number>(1000);
const myPractices = reactive([
  {
    title: '以前端VUE3框架開發網站(簡易倉庫系統)',
    description: '以VUE3框架搭配各式套件(vite、VueRouter、bootstrap、sweet alert、pinia、tailwind...等)進行開發。簡單的倉庫紀錄系統(紀錄出入庫、產品外包狀態、廠商管理、模具管理)因之前開發的專案經使用者提出各種想法後，我以前端框架開發更能給使用者良好操作體驗，故又另自學VUE框架並使用axios串接先前以全端開發之API再次開發簡易出入庫倉庫系統。因有帳密保護，故專案連結無法詳細展示。(可於面試時展示)',
    imgName: 'inventory.jpg',
    showMoreBtn: false
  },
  {
    title: '個人資訊簡歷的頁面',
    description: '就簡簡單單的簡歷，隨時增加或優化。',
    imgName: 'resumeView.jpg',
    showMoreBtn: false
  },
  {
    title: 'RGB色碼表',
    description: '調出喜歡的顏色並提供色碼，Background color會隨著不同的值跟著變換。',
    imgName: 'colorCode.jpg',
    showMoreBtn: false
  },
  {
    title: '載入中的狀態頁面',
    description: '七彩旋轉的等待載入畫面',
    imgName: 'loaderPage.jpg',
    showMoreBtn: false
  },
  {
    title: '登出圖案',
    description: '練習只用 tailwind 畫出開關門小動畫，點擊後 3 秒會離開該頁。',
    imgName: 'logOutAnimation.jpg',
    showMoreBtn: false
  },
  {
    title: '不同的展示所有作品方式',
    description: '使用 swiper 套件。',
    imgName: 'PersonalPractiseGeneral.jpg',
    showMoreBtn: false
  },
])

// 將傳入的 Swiper 實例儲存在 swiperInstance 的 ref 中
const func_setSwiperInstance = (swiper: SwiperType) => {
  swiperInstance.value = swiper;
};

// 切換顯示更多or更少
const func_handleClick = (e: MouseEvent): void => {
  const target = e.target as HTMLElement;
  const previousSibling = target.previousElementSibling as HTMLElement | null;

  if (previousSibling) {
    target.innerText = target.innerText === '顯示較少...' ? '顯示全文...' : '顯示較少...'
    previousSibling.classList.toggle('t-truncate');
  }
}

// 預設 swiper 在最後一張滑至第一張
const func_goTolastSlide = () => {
  setTimeout(() => {
    if (swiperInstance.value) {
      swiperInstance.value.slideTo(0)
    }
  }, 500)
};

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
  nextTick(() => {
    func_goTolastSlide()
    func_showMoreBtn()
  })
})

</script>

<style scoped>
#app { height: 100% }
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: auto;
}

.swiper-slide img {
  display: block;
  width: 100%;
}

</style>
