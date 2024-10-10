<template>
  <div class="t-flex t-flex-col t-items-center t-justify-center t-h-screen t-w-screen">
    <div class="t-h-[28px]">
      <p v-show="showTitle || isLeaving" class="t-text-xl t-text-white">{{title}}</p>
    </div>
    <div class="t-flex t-border t-bg-white t-border-4 t-border-red-700  t-w-[100px] t-h-[150px] t-overflow-hidden" @click="handleClickLeave" @mouseenter="showTitle = true" @mouseleave="showTitle = false">
      <div
      class="
        t-w-full
        t-h-full
        t-relative
        t-bg-red-950
        t-duration-100
        t-ease-linear
        t-origin-bottom-right
        hover:t-skew-y-12
        hover:t-ml-[18px]
      "
      role="button">
        <div
          class="
            t-border
            t-border-4
            t-rounded-full
            t-w-[10px]
            t-h-[10px]
            t-absolute
            t-inset-x-3
            t-inset-y-1/2
            -t-translate-x-1/2
            -t-translate-y-1/2
          "
        >
        </div>
        <div
          class="
            t-absolute
            t-border
            t-inset-x-2
            t-inset-y-2
            t-w-[10px]
            t-h-[50px]
            t-bg-white
          "
        >
        </div>
        <div 
          class="
            t-absolute
            t-border-l
            t-border-t
            t-inset-x-9
            t-inset-y-5
            t-h-[20px]
            t-w-[20px]
            t-rotate-45
          "
        >
        </div>
        <div class="t-absolute t-inset-x-7 t-inset-y-7 t-h-[20px] t-w-[35px] t-bg-[#583900] t-border-2 t-border-black t-flex t-justify-center">
          <span class="t-text-[8px] t-text-red-500 t-font-bold">Log out</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();
const showTitle = ref<boolean>(false)
const title = ref<string>('Leave ?')
const isLeaving = ref<boolean>(false)


const handleClickLeave = () => {
  isLeaving.value = true
  let _count = 3 as number
  title.value = `Leaving...${_count}s`
  
  let intervalId = setInterval(() => {
    _count--
    title.value = `Leaving...${_count}s`

    if (_count < 0) {
      clearInterval(intervalId)
      router.push({name: 'personalPractise'})
    }
  }, 1000)
}
</script>
<style scoped>
  
</style>