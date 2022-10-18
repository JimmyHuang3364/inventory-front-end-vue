<template>
  <div class="mx-3 pb-3">
    <h1 class="text-white">New part number</h1>
    <form class="">

      <div class="form-group">
        <label for="exampleFormControlSelect1">発注人</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>

      <div class="form-group">
        <label for="inputAddress">部品番號 <input v-model="subPartNumberCheck" class="ml-5" type="checkbox" name="" id="subPartNumberCheck"> <label for="subPartNumberCheck" class="sub-part-check-box">子部品</label></label>
        <input type="text" class="form-control" id="inputAddress" placeholder="">
      </div>


      <div v-if="subPartNumberCheck" class="form-group border border-warning rounded p-2" style="background-color:midnightblue;">
        <div class="row">
          <div class="col">
            <label for="">母部品</label>
            <div class="input-group input-group-sm p-0">
              <select class="form-control" id="exampleFormControlSelect2">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
          <div class="col">
            <label for="">每單位使用量</label>
            <div class="input-group input-group-sm p-0">
              <input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" min="0">
            </div>
          </div>
          <!-- <div class="col">
            <label for="inputAddress2">母部品</label>
            <input type="text" class="form-control" placeholder="">
          </div>
          <div class="col">
            <label for="inputAddress2">每單位使用量</label>
            <input type="number" class="form-control" min="0" placeholder="">
          </div> -->
        </div>
      </div>


      <div class="form-group">
        <label for="inputCity">初設數量</label>
        <input type="number" class="form-control" id="inputCity" min="0">
      </div>
      <div class="form-group">
        <label for="inputCity">安全數量設定</label>
        <input type="number" class="form-control" id="inputCity" min="0">
      </div>
      <div class="form-group">
        <label for="inputCity">備註</label>
        <input type="text" class="form-control" id="inputCity">
      </div>
      <button type="submit" class="btn btn-primary">Sign in</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subPartNumberCheck: false
    }
  },
}
</script>

<style scoped>
form label {
  font-size: 24px;
  color: aliceblue;
}

.sub-part-check-box {
  font-size: 16px;
  color: yellow;
}
</style>