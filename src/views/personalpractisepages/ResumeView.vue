<template>
  <div class="body t-min-h-[1500px]">
    <header>
      <nav class="nav-bar">
        <span class="nav-title">
          黃建銘
        </span>
        <div class="appearance">
          <span>Light</span>
          <input type="checkbox" id="appearance-switch" v-model="darkMode" :checked="darkMode">
          <label class="appearance-switch-label" for="appearance-switch">
            <span class="appearance-switch-txt" turnOn="light" turnOff="dark"></span>
          </label>
          <span>Dark</span>
        </div>
      </nav>
    </header>
    <main>
      <p class="t-ml-10 t-text-xs t-text-end">最後編輯: 2024/10/13</p>
      <section calss="personal-info">
        <div class="avatar">
          <Transition name="avatar">
            <img v-show="showAvatar" class="avatar-img" src="../../assets/personalPractise/avatar.jpg" alt="">
          </Transition>
        </div>
        <h1 class="name">
          黃建銘
        </h1>
        <Transition name="description">
          <div v-show="showDescription">
            <div class="social-media">
              <a class="social-media-link" href="https://www.facebook.com/profile.php?id=1596273843" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512">
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                </svg>
              </a>
              <a class="social-media-link" href="https://www.instagram.com/jimmyhuang_1992/">
                <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
              <a class="social-media-link" href="https://github.com/JimmyHuang3364" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 496 512">
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </a>
            </div>
            <div class="title">
              來自台中
            </div>
            <p class="description">
              我是黃建銘，今年31歲，我的興趣是電玩、動漫、騎車，因為喜歡騎車所以有一台黃牌重機。
              
              我喜歡嘗試並學習未知領域，在大學時學法律，前份工作為主要生產切割哀鳳手機殼之刀具的傳產，前面有說我喜歡學習未知領域，就是我當時職位是品保課的助理工程師，工作內容為使用自動量測機檢測產品，關鍵就是前公司在量測機上就只會使用基本功能，造成工作沒有效率，當時我會去翻說明書嘗試使用，最後改變量測方法並提升效率。在前份工作向公司提供許多改善提案（如：編寫EXCEL自動化程式、提供現場機台戰情看板資訊之想法與作法等…，附件欄裡有提供相關ppt），許多提案都大大節省公司的時間成本，在2018年獲得最佳員工榮譽。
              
              我在2021年報名學習網頁開發課程，以Node.js Express框架進行全端開發及自修使用VUE進行前端開發部分，並有開發及實際上線之簡單專案。
            </p>
          </div>
        </Transition>
      </section>
      
      <!-- Skills -->
      <PersonalSkillsSection :currentscrollY="currentscrollY"/>

      <!-- 作品展示 -->
      <template v-if="showPractiseSection">
          <section class="practise-section">
            <h2>作品展示</h2>
            <PractiseSwiper :darkMode="darkMode" />
          </section>
      </template>

      <!-- 經歷 -->
      <template v-if="showPractiseSection">
        <ExoerienceSection />
      </template>
    </main>

  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, nextTick, onBeforeUnmount, computed } from 'vue'

// 組件
import PersonalSkillsSection from './components/PersonalSkillsSection.vue';
import PractiseSwiper from './components/PractiseSwiper.vue';
import ExoerienceSection from './components/ExoerienceSection.vue';

const darkMode = ref<boolean>(false)
const showAvatar = ref<boolean>(false)
const showDescription = ref<boolean>(false)
const showPractiseSection = ref<boolean>(false)
const currentscrollY = ref<number>(0)

const func_changeAppearance = () => {
  if (localStorage.getItem('darkMode') === 'true') { darkMode.value = true } else { darkMode.value = false }
  const 
    htmlBody = document.querySelector('.body') as HTMLElement | null

  if (!htmlBody) return
  
  if (darkMode.value) {
    htmlBody.classList.add('dark-mode')
    return
  }
  if (!darkMode.value) {
    htmlBody.classList.remove('dark-mode')
    return
  }
}

const func_showHiddenItems = () => {
  currentscrollY.value = window.scrollY + window.innerHeight
  if (currentscrollY.value >= document.documentElement.scrollHeight &&!showPractiseSection.value) {
    showPractiseSection.value = true
  }
}

onMounted(() => {
  func_changeAppearance()
  addEventListener('scroll', func_showHiddenItems)
  showAvatar.value = true
  showDescription.value = true
  nextTick(() => {
    showAvatar.value = true
    showDescription.value = true
  })
})

onBeforeUnmount(() => {
  removeEventListener('scroll', func_showHiddenItems)
})

watch(
  () => darkMode.value,
  () => {
    if (darkMode.value) { localStorage.setItem('darkMode', 'true') }
    if (!darkMode.value) { localStorage.setItem('darkMode', 'false') }
    func_changeAppearance()
  }
)
</script>

<style scoped>
header {
  height: 60px;
  color: #666666;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.08);
  background-color: rgb(255, 115, 0);
  background: linear-gradient(to bottom, rgb(255, 115, 0) 20%, rgb(255, 171, 103));
}

nav {
  max-width: 820px;
  margin: 0px auto;
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.body {
  font-family: 'Lato', 'Noto Sans TC', sans-serif;
  margin: 0px;
  padding: 0px;
  color: #333333;
  background-color: #f6f7f8;
  transition: 1s;
  
  .nav-title {
    font-weight: bold;
    letter-spacing: 1px;
  }

  .appearance {
    display: flex;
    justify-content: center;

    #appearance-switch {
      height: 0;
      width: 0;
      visibility: hidden;
    }

    .appearance-switch-label {
      margin: auto 3px;
      cursor: pointer;
      width: 40px;
      height: 15px;
      background: #fff;
      display: block;
      border-radius: 15px;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        width: 15px;
        height: 15px;
        background: black;
        border-radius: 15px;
        transition: 0.3s;
      }
    }
  }

  &.dark-mode {
    background-color: black;
    main {
      h1 {
        color: #f6f7f8;
      }
      h3 {
        color: #f6f7f8;
      }
      p {
        color: #fff;
      }

      .description,
      .job-title,
      .duration {
        color: #9a9a9a;
      }
      
      svg {
        fill: #999999;
      }
    }
  }
}



.appearance-switch-label::after {
  content: '';
  position: absolute;
  width: 15px;
  height: 15px;
  background: black;
  border-radius: 15px;
  transition: 0.3s;
}

.appearance-switch-txt::before,
appearance-switch-txt::after {
  display: block;
  color: #fff;
  font-weight: bold;
  box-sizing: border-box;
}

.appearance-switch-txt::before {
  content: attr(light);
  color: #fff;
}

.appearance-switch-txt::after {
  content: attr(dark);
  color: #ccc;
}

#appearance-switch:checked+.appearance-switch-label {
  background: gray;
}

#appearance-switch:checked+.appearance-switch-label:after {
  left: 0px;
  transform: translateX(25px);
}

main {
  max-width: 700px;
  margin: 0px auto;
  padding: 40px 20px;
}

h2 {
  color: orange;
  font-size: 32px;
  margin: 24px 0px 8px;
}

h3 {
  font-size: 20px;
  margin: 0px 0px 8px;
  font-weight: 500;
}

section {
  margin-bottom: 48px;
}

p {
  color: #666666;
}

.avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px; 
}

.avatar-img {
  border: 5px solid #ff6600;
  outline-color: #ff6600;
  border-radius: 50%;
  width: 200px;
}

.avatar-enter-active {
  animation: avatar-in 1s;
}
.avatar-leave-active {
  animation: avatar-in 0.5s reverse;
}

@keyframes avatar-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(0);
  }
  75% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

.name {
  text-align: center;
  font-size: 35px;
  margin: 20px 0px;
}

.social-media {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.social-media-link {
  color: #999999;
  text-decoration: none;
  margin: 0px 5px;
}

.social-media-link:hover path {
  fill: #ff0000;
  transition: 0.5s;
}

.title {
  color: orange;
  text-align: center;
  font-size: 20px;
}

.description-enter-active {
  animation: description-leftIn 1s linear;
}

@keyframes description-leftIn {
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

.skills {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 30px;

  .skill {
    width: 30%;
    margin: 0px 0px 10px 0px;
  }

  .skill-name {
    border-top: 1px solid #999999;
    padding-top: 16px;
    font-weight: bolder;
  }
}

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

hr {
  border: 0px;
  height: 1px;
  background: #cccccc;
  margin: 20px 0px;
}

.company {
  font-size: 22px;
  color: #666666;
  display: flex;
  align-items: baseline;
  column-gap: 5px;
}

.job-title,
.duration {
  color: #666666;
  font-size: 16px;
  margin: 5px 0px;
}

.fa-building,
.fa-calendar-alt {
  margin-right: 5px;
}

.job-Work-content {
  margin: 20px;
  color: #b88424b2;
}
</style>