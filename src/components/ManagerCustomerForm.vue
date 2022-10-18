<template>
  <div class="mx-3 pb-3">
    <h1 class="text-white">New Customer</h1>
    <form class="">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">名稱</label>
          <input type="email" class="form-control" id="inputEmail4">
        </div>
      </div>
      <div class="form-group">
        <label for="inputAddress">地址</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
      </div>
      <div class="form-group">
        <label for="inputAddress2">電話</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputCity">FAX</label>
          <input type="text" class="form-control" id="inputCity">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputCity">圖片連結</label>
          <input type="text" class="form-control" id="inputCity">
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Sign in</button>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
label {
  color: #FFF;
}
</style>