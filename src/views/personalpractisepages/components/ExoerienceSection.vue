<template>
  <section class="exoerience-section">
    <h2 class="job-exoerience t-text-3xl t-mb-2 t-text-amber-500">工作經歷</h2>
    <ul class="exoerience">
      <template v-for="(experience, index) in experiences" :key="index">
        <ExoerienceItem :experience="experience"/>
      </template>
    </ul>
  </section>
</template>
<script setup lang="ts">
import { reactive } from 'vue';

// 組件
import ExoerienceItem from './ExoerienceItem.vue';

interface Experience {
  companyName: string;
  jobTitle: string;
  duration: string;
  workContent: string[];
}

const experiences = reactive<Experience[]>([
  {
    companyName: '深思設計有限公司',
    jobTitle:'網頁前端助理工程師',
    duration: '2023/12 ~ 2024/9',
    workContent: [
      '維護、開發 vue3 中大型專案：AP串接I、網頁畫面切版、各式優化、UI測試。',
      '使用到技術/套件： vue、vite、VueRouter、bootstrap、sweet alert、pinia、tailwind、TypeScript ...等。'
    ]
  },
  {
    companyName: '綠點高新科技股份有限公司',
    jobTitle:'品管／品保工程師',
    duration: '2014/8 ~ 2022/6',
    workContent: [
      '產品檢驗、建立自動化量測程式。',
      '2018年獲得年度績優員工。',
      '提供眾多實用有效之改善提案（如：編寫EXCEL自動化程式、提供現場機台戰情看板資訊之想法與作法等…）。'
    ]
  },
])

</script>
<style>
  
</style>