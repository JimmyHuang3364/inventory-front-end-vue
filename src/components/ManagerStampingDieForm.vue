<template>
  <!-- <div class="m-3 pb-3" v-show="!isLoading"> -->
  <div class="m-3 pb-3">
    <h1 class="text-white">新增模具</h1>
    <form>
      <div class="form-group">
        <label for="exampleFormControlSelect1">機種<span class="text-danger ml-1" style="font-size: 10px;">(必填)</span></label>
        <input type="text" class="form-control" name="name" id="name">
      </div>

      <div class="form-group">
        <label for="unitPrice">對應部品<span class="text-danger ml-1" style="font-size: 10px;">(必填)</span></label>
        <input type="text" class="form-control" name="unitPrice" id="unitPrice" min="0" step="0.01">
      </div>
      <div class="form-group">
        <label for="unitPrice">資產類型</label>
        <input type="text" class="form-control" name="unitPrice" id="unitPrice" min="0" step="0.01">
      </div>
      <div class="form-group">
        <label for="unitPrice">模具名</label>
        <input type="text" class="form-control" name="unitPrice" id="unitPrice" min="0" step="0.01">
      </div>
      <div class="form-group">
        <label for="unitPrice">取得年月</label>
        <input type="month" class="form-control" name="unitPrice" id="unitPrice" min="0" step="0.01">
      </div>
      <div class="form-group">
        <label for="unitPrice">取得金額</label>
        <input type="number" class="form-control" name="unitPrice" id="unitPrice" min="0" step="0.01">
      </div>
      <div class="form-group">
        <label for="unitPrice">製造人</label>
        <input type="text" class="form-control" name="unitPrice" id="unitPrice" min="0" step="0.01">
      </div>
      <div class="form-group">
        <label for="unitPrice">設定壽命<span class="text-danger ml-1" style="font-size: 10px;">(必填)</span></label>
        <input type="number" class="form-control" name="unitPrice" id="unitPrice" min="0" step="0.01">
      </div>
      <div class="form-group">
        <label for="unitPrice">模具材質</label>
        <input type="text" class="form-control" name="unitPrice" id="unitPrice" min="0" step="0.01">
      </div>
      <div class="form-group">
        <label for="unitPrice">重量</label>
        <input type="number" class="form-control" name="unitPrice" id="unitPrice" min="0" step="0.01">
      </div>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
form label {
  font-size: 24px;
  color: aliceblue;
}

.sub-part-check-box-label {
  font-size: 16px;
  color: yellow;
}
</style>