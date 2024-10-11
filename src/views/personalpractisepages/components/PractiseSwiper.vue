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
    <SwiperSlide>
      <img src="../../../assets/personalPractise/inventory.jpg" />
      <div class="t-overflow-auto" :class="{'t-text-white': props.darkMode}">
        <h2>以前端VUE3框架開發網站(簡易倉庫系統)</h2>
        <p class="t-truncate">以VUE3框架搭配各式套件(vite、VueRouter、bootstrap、sweet alert、pinia、tailwind...等)進行開發。簡單的倉庫紀錄系統(紀錄出入庫、產品外包狀態、廠商管理、模具管理)因之前開發的專案經使用者提出各種想法後，我以前端框架開發更能給使用者良好操作體驗，故又另自學VUE框架並使用axios串接先前以全端開發之API再次開發簡易出入庫倉庫系統。因有帳密保護，故專案連結無法詳細展示。(可於面試時展示)</p>
        <button class="t-text-xs t-text-right t-block t-w-full t-text-cyan-600 hover:t-text-sky-200" @click="func_handleClick">顯示全文...</button>
        <router-link :to="{ name: 'sign-in' }" class="btn btn-primary">Go...</router-link>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <img src="../../../assets/personalPractise/resumeView.jpg" />
      <div class="" :class="{'!t-texwhite': props.darkMode}">
        <h2>個人資訊簡歷的頁面</h2>
        <p>就簡簡單單的簡歷，隨時增加或優化。</p>
      </div>
      <router-link :to="{ name: 'personalPractise-resume' }" class="btn btn-primary">Go...</router-link>
    </SwiperSlide>
    <SwiperSlide>
      <img src="../../../assets/personalPractise/colorCode.jpg" />
      <div class="" :class="{'t-text-white': props.darkMode}">
        <h2>RGB色碼表</h2>
        <p>調出喜歡的顏色並提供色碼，Background color會隨著不同的值跟著變換。</p>
      </div>
      <router-link :to="{ name: 'personalPractise-color-code' }" class="btn btn-primary">Go...</router-link>
    </SwiperSlide>
    <SwiperSlide>
      <img src="../../../assets/personalPractise/loaderPage.jpg" />
      <div class="" :class="{'t-text-white': props.darkMode}">
        <h2>載入中的狀態頁面</h2>
        <p>七彩旋轉的載入畫面</p>
      </div>
      <router-link :to="{ name: 'personalPractise-loaderPage' }" class="btn btn-primary">Go...</router-link>
    </SwiperSlide>
    <SwiperSlide>
      <img src="../../../assets/personalPractise/logOutAnimation.jpg" />
      <div class="" :class="{'t-text-white': props.darkMode}">
        <h2>登出圖案</h2>
        <p>只用 tailwind 畫出開關門小動畫，點擊後 3 秒會離開該頁。</p>
      </div>
      <router-link :to="{ name: 'personalPractise-logOutAnimation' }" class="btn btn-primary">Go...</router-link>
    </SwiperSlide>
    <SwiperSlide>
      <img src="../../../assets/personalPractise/PersonalPractiseGeneral.jpg" />
      <div class="" :class="{'t-text-white': props.darkMode}">
        <h2>不同的展示所有作品方式</h2>
        <p>使用 swiper 套件。</p>
      </div>
      <router-link :to="{ name: 'PersonalPractiseGeneral' }" class="btn btn-primary">Go...</router-link>
    </SwiperSlide>
    <SwiperSlide>
      <img src="../../../assets/personalPractise/default.jpg" />
      <div class="" :class="{'t-text-white': props.darkMode}">
        <h2>努力練習產出中..</h2>
        <p>努力找目標練習產出中...</p>
      </div>
      <div class="t-bg-[#8c9bab] t-text-black t-w-fit t-p-2 t-rounded" role="button">努力練習產出中...</div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import { defineProps, onMounted, ref, nextTick } from 'vue'
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

const func_setSwiperInstance = (swiper: SwiperType) => {
  swiperInstance.value = swiper;
};

const func_handleClick = (e: MouseEvent): void => {
  const target = e.target as HTMLElement;
  const previousSibling = target.previousElementSibling as HTMLElement | null;

  if (previousSibling) {
    target.innerText = target.innerText === '顯示較少...' ? '顯示全文...' : '顯示較少...'
    previousSibling.classList.toggle('t-truncate');
  }
}

const func_goTolastSlide = () => {
  setTimeout(() => {
    if (swiperInstance.value) {
      swiperInstance.value.slideTo(0)
    }
  }, 500)
};

onMounted(() => {
  nextTick(() => {
    func_goTolastSlide()
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
