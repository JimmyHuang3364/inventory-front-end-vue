<template>
  <div>
    <section class="skill-section t-mb-10">
        <h2 class="t-text-3xl t-mb-2 t-text-amber-500">技能</h2>
        <div class="skills t-flex t-justify-start t-flex-wrap t-gap-[30px]">
          <template v-for="(content, index) in mySkillItemsClass_1" :key="index">
            <Transition :name="`skills-item-${index + 1}`">
              <PersonalSkillItem  v-show="showSkillsTeam1" :content="content"/>
            </Transition>
          </template>
            <template v-for="(content, index) in mySkillItemsClass_2" :key="index">
              <Transition :name="`skills-item-${index + 4}`">
                <PersonalSkillItem  v-show="showSkillsTeam2" :content="content"/>
              </Transition>
            </template>
          </div>
      </section>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, defineProps, watch } from 'vue';

const props = defineProps<{currentscrollY: number}>()


// 組件
import PersonalSkillItem from './PersonalSkillItem.vue';

const showSkillsTeam1 = ref<boolean>(false)
const showSkillsTeam2 = ref<boolean>(false)
const mySkillItemsClass_1 = reactive([
  {
    title: '程式設計入門',
    description: '具備網頁設計的能力，熟悉 HTML、CSS 和 JavaScript，並對於基礎的演算法有一定的掌握力。'
  },
  {
    title: '掌握網頁開發',
    description: '能夠打造兼具前後端的 Web App 產品。從切版、RWD、操作 DOM 事件、使用 AJAX 與串接 API 等前端能力，到使用 Node.js 與 MongoDB 建立後端功能，並親手打造自己的產品。'
  },
  {
    title: '軟體工程師實力',
    description: '前端部分能夠透過VUE建立 SPA 頁面，後端則能夠以node.js Express進行全端開發。'
  },
])
const mySkillItemsClass_2 = reactive([
  {
    title: '擁有中大型專案開發/維護經驗',
    description: '串接 API 套件評估、畫面切版以及使用多種技術/套件，進行中大型專案開發/維護。(ex: vue、vite、VueRouter、bootstrap、sweet alert、pinia、tailwind、TypeScript...等)'
  },
  {
    title: '前端使用多種技術/套件經驗',
    description: '擁有使用過 vue、vite、VueRouter、bootstrap、sweet alert、pinia、tailwind、TypeScript、webpack ...等經驗'
  },
  {
    title: '後端使用多種技術/套件經驗',
    description: '擁有使用過 Express、Handlebars、Sequelize ...等經驗。'
  },
  {
    title: '其他使用多種技術/套件經驗',
    description: '擁有使用過 nvm、git、Railway、webpack、mongoDB、MySql、GCP、Heroku ...等經驗。'
  },
  {
    title: '持續精進',
    description: '等待補到滿滿滿...。'
  },
]) 

const func_showItems = () => {
  if (props.currentscrollY >= document.documentElement.scrollHeight - 200 && !showSkillsTeam1.value) {
    showSkillsTeam1.value = true
  }
  if (props.currentscrollY >= document.documentElement.scrollHeight - 100 && !showSkillsTeam2.value) {
    showSkillsTeam2.value = true
  }
}


watch(
  () => props.currentscrollY,
  () => {
    func_showItems()
  }
)


</script>
<style scoped>

.skills-item-1-enter-active {
  animation: enter-leftIn 1s linear;
}

.skills-item-2-enter-active {
  animation: enter-topIn 1s linear;
}

.skills-item-3-enter-active {
  animation: enter-rightIn 1s linear;
}

@keyframes enter-leftIn {
  0% {
    opacity: 0;
    transform: translate3d(-20%, 0, 0);
  }
  50% {
    opacity: 0;
    transform: translate3d(-20%, 0, 0);
  }
  100% {
    transform: none;
  }
}

@keyframes enter-topIn {
  0% {
    opacity: 0;
    transform: translate3d(0, -20%, 0);
  }
  50% {
    opacity: 0;
    transform: translate3d(0, -20%, 0);
  }
  100% {
    transform: none;
  }
}

@keyframes enter-rightIn {
  0% {
    opacity: 0;
    transform: translate3d(20%, 0, 0);
  }
  50% {
    opacity: 0;
    transform: translate3d(20%, 0, 0);
  }
  100% {
    transform: none;
  }
}

.skills-item-4-enter-active,
.skills-item-5-enter-active,
.skills-item-6-enter-active,
.skills-item-7-enter-active,
.skills-item-8-enter-active {
  transition: all 0.3s ease-in-out;
}

.skills-item-4-enter-active {
  transition-delay: 0.3s;
}

.skills-item-5-enter-active {
  transition-delay: 0.6s;
}

.skills-item-6-enter-active {
  transition-delay: 0.9s;
}

.skills-item-7-enter-active {
  transition-delay: 1.2s;
}

.skills-item-8-enter-active {
  transition-delay: 1.5s;
}

.skills-item-4-enter-from,
.skills-item-5-enter-from,
.skills-item-6-enter-from,
.skills-item-7-enter-from,
.skills-item-8-enter-from{
  transform: translateY(50px);
  opacity: 0;
}
</style>