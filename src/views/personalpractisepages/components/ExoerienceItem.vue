<template>
  <li class="exoerience-item t-my-10">
    <span class="company t-flex t-gap-1 t-items-baseline">
      <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 384 512"><path d="M48 0C21.5 0 0 21.5 0 48L0 464c0 26.5 21.5 48 48 48l96 0 0-80c0-26.5 21.5-48 48-48s48 21.5 48 48l0 80 96 0c26.5 0 48-21.5 48-48l0-416c0-26.5-21.5-48-48-48L48 0zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm112-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM80 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM272 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"/></svg>
      <p class="t-text-[#666666] t-text-xl t-font-bold company-name">{{ props.experience.companyName }}</p>
    </span>
    <ul>
      <li class="job-title t-text-[#666666] t-my-2">職稱：{{ props.experience.jobTitle }}</li>
      <li class="duration t-text-[#666666] t-my-2">任職期間：{{props.experience.duration}}</li>
      <li>
        <p class="job-Work-content !t-text-[#b88424b2] t-m-5">工作內容與成就：</p>
      </li>
      <ul>
        <template v-for="(_workContent, index) in props.experience.workContent" :key="index">
          <li class="description t-my-2"><span>－</span>{{ _workContent }}</li>
        </template>
      </ul>
    </ul>
  </li>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';

interface Experience {
  companyName: string;
  jobTitle: string;
  duration: string;
  workContent: [];
}

const props = defineProps<{experience: Experience}>()
</script>
<style scoped>
  .dark-mode {
    .exoerience-item{
      .company {
        svg {
          fill: #9a9a9a;
        }
      }
      
      .company-name{
        color: #fff;
      }

      li {
        color: #9a9a9a;
      }
    }
  }
</style>