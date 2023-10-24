<template>
  <div class="body">
    <header>
      <nav class="nav-bar">
        <span class="nav-title">
          黃建銘
        </span>
        <div>
          <a href="#" class="nav-link disable">
            <i class="fas fa-print"></i>
          </a>
          <a href="#" class="nav-link">
            <i class="fas fa-moon" id="backgroundToggle"></i>
          </a>
        </div>
      </nav>
    </header>
    <main>
      <section calss="personal-info">
        <div class="avatar">
          <img class="avatar-img" src="https://scontent.frmq2-2.fna.fbcdn.net/v/t31.18172-8/472016_4315894187665_339406213_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=be3454&_nc_ohc=FC9XogXITM0AX-H6VNm&_nc_ht=scontent.frmq2-2.fna&oh=00_AfAvKeOhMMxMmBcCUunBa8XTcDyQBFxEhsp7fsjRpZ-Lkg&oe=6557F51B" alt="">
        </div>
        <h1 class="name">
          黃建銘
        </h1>
        <div class="social-media">
          <a class="social-media-link" href="https://www.facebook.com/profile.php?id=1596273843" target="_blank">
            <i class="fab fa-facebook fa-lg"></i>
          </a>
          <a class="social-media-link" href="https://www.instagram.com/jimmyhuang_1992/">
            <i class="fab fa-instagram fa-lg"></i>
          </a>
          <a class="social-media-link" href="#" target="_blank">
            <i class="fas fa-paper-plane fa-lg"></i>
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
      </section>

      <section class="skill-section">
        <h2>專業技能</h2>
        <div class="skills">
          <div class="skill">
            <h3 class="skill-name">程式設計入門</h3>
            <p class="skill-description description">具備網頁設計的能力，熟悉 HTML、CSS 和 JavaScript，並對於基礎的演算法有一定的掌握力。</p>
          </div>
          <div class="skill">
            <h3 class="skill-name">掌握網頁開發</h3>
            <p class="skill-description description">能夠打造兼具前後端的 Web App 產品。從切版、RWD、操作 DOM 事件、使用 AJAX 與串接 API 等前端能力，到使用 Node.js 與 MongoDB 建立後端功能，並親手打造自己的產品。</p>
          </div>
          <div class="skill">
            <h3 class="skill-name">軟體工程師實力</h3>
            <p class="skill-description description">前端部分能夠透過VUE建立 SPA 頁面，後端則能夠以node.js進行全端開發。</p>
          </div>
        </div>
      </section>

      <section class="exoerience-section">
        <h2 lass="job-exoerience">工作經歷</h2>
        <ul class="exoerience">
          <li><span class="company"><i class="fas fa-building"></i>綠點高新科技股份有限公司</span>
            <ul>
              <li class="job-title">職稱：品管／品保工程師</li>
              <li class="duration">任職期間：2014/8 ~ 2022/6</li>
              <li>
                <p class="job-Work-content">工作內容與成就：</p>
              </li>
              <ul>
                <li class="description">產品檢驗、建立自動化量測程式。</li>
                <li class="description">2018年獲得年度績優員工</li>
                <li class="description">提供眾多實用有效之改善提案（如：編寫EXCEL自動化程式、提供現場機台戰情看板資訊之想法與作法等…）
                </li>
              </ul>
            </ul>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script>
export default {

}
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
}

.nav-title {
  font-weight: bold;
  letter-spacing: 1px;
}

.nav-link {
  color: #666666;
  margin: 0 2px;
}

.nav-link:hover {
  color: red;
  transition: 0.3s;
}

.disable {
  cursor: no-drop;
}

main {
  max-width: 700px;
  margin: 0px auto;
  padding: 40px 20px;
}

h2 {
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
  text-align: center;
}

.avatar-img {
  border: 5px solid #ff6600;
  outline-color: #ff6600;
  border-radius: 50%;
  width: 200px;
}

.name {
  text-align: center;
  font-size: 35px;
  margin: 20px 0px;
}

.social-media {
  text-align: center;
  margin-bottom: 20px;
}

.social-media-link {
  color: #999999;
  text-decoration: none;
  margin: 0px 5px;
}

.social-media-link:hover {
  color: #ff0000;
  transition: 0.5s;
}

.title {
  color: orange;
  text-align: center;
  font-size: 20px;
}

.skills {
  display: flex;
  justify-content: space-between;
}

.skill {
  width: 30%;
}

.skill-name {
  border-top: 1px solid #999999;
  padding-top: 16px;
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