<template>
  <div class="container mt-3 d-flex justify-content-between flex-wrap">
    <div class="card m-2" style="width: 18rem;">
      <img src="https://scontent.frmq2-1.fna.fbcdn.net/v/t39.30808-6/395052242_10228629050223298_4860701626208821810_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1NAP3TciFYAAX9TLKfA&_nc_ht=scontent.frmq2-1.fna&oh=00_AfCaD0Hz6Szc33ptq2QjnPuHmNclYQtVs4a-00s9quWHyQ&oe=653BE2A8" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">個人資訊簡歷的頁面</h5>
        <p class="card-text">就簡簡單單的簡歷，隨時增加或優化。</p>
        <router-link :to="{ name: 'personalPractise-resume' }" class="btn btn-primary">Go...</router-link>
      </div>
    </div>
    <div class="card m-2" style="width: 18rem;">
      <img src="https://scontent.frmq2-1.fna.fbcdn.net/v/t39.30808-6/395066284_10228629050583307_5940826612643536166_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=U_EFMeHSZMEAX883MX3&_nc_ht=scontent.frmq2-1.fna&oh=00_AfBQnVj6MOlGt4D5GO3_yGg_TI819_XohANwkFgJ5n8Q6A&oe=653B73E3" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">RGB色碼表</h5>
        <p class="card-text">調出喜歡的顏色並提供色碼，Background color會隨著不同的值跟著變換。</p>
        <router-link :to="{ name: 'personalPractise-color-code' }" class="btn btn-primary">Go...</router-link>
      </div>
    </div>
    <div class="card m-2" style="width: 18rem;">
      <img src="https://scontent.frmq2-2.fna.fbcdn.net/v/t39.30808-6/395075322_10228629051023318_2455155141404381895_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=AT59f3flF-UAX9y23ev&_nc_ht=scontent.frmq2-2.fna&oh=00_AfDMZRpHMfhgMqR2o-MBsNu57TZA-akfNy7DnimOPtNe2w&oe=653B9BFA" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">載入中的狀態頁面</h5>
        <p class="card-text">七彩旋轉的載入畫面</p>
        <router-link :to="{ name: 'personalPractise-loaderPage' }" class="btn btn-primary">Go...</router-link>
      </div>
    </div>
    <div class="card m-2" style="width: 18rem;">
      <img src="https://scontent.frmq2-2.fna.fbcdn.net/v/t31.18172-8/460143_10200722428495196_176637871_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=2be8e3&_nc_ohc=m_bnoRy8g-AAX9C17wH&_nc_ht=scontent.frmq2-2.fna&oh=00_AfBl5r7FBRWLlDZ2G_5yChGM9m-LBSErbquOuJ9nWDVmbg&oe=655D7961" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">努力練習產出中...</h5>
        <p class="card-text">努力找目標練習產出中...</p>
        <router-link :to="{ name: 'personalPractise' }" class="btn btn-disable">努力練習產出中...</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.btn-disable {
  background-color: #8d8d8d;
  cursor: not-allowed;
}
</style>