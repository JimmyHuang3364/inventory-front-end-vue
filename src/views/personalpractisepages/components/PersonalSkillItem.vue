<template>
  <div class="skill t-basis-[30%] t-pt-[16px] t-border-t t-border-[#999999]">
    <h3 class="skill-name t-text-xl t-mb-1 t-font-bold">{{ props.content.title }}</h3>
    <p class="skill-description t-text-[#666666]">{{ props.content.description }}</p>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
interface Content {
  title: string;
  description: string;
}

const props = defineProps<{content: Content}>()
</script>
<style scoped>
  .dark-mode {
    .skill-name {
      color: #fff;
    }
    .skill-description {
      color: #9a9a9a;
    }
  }
</style>