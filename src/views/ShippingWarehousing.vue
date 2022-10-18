<template>
  <div class="view">
    <div class="bg-dark border border-warning mb-3 px-3">
      <div class="d-flex justify-content-between align-items-center">
        <h1 class="text-white">新增</h1>
        <div>
          <button class="btn btn-warning mr-4">入庫</button>
          <button class="btn btn-outline-danger">出庫</button>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-3">
          <label class="add-form-label" for="inputEmail4">日期</label>
          <input type="date" class="form-control" id="inputEmail4">
        </div>
        <div class="form-group col-md-3">
          <label class="add-form-label" for="inputPassword4">品番號</label>
          <input type="text" class="form-control" id="inputPassword4">
        </div>
        <div class="form-group col-md-3">
          <label class="add-form-label" for="inputPassword4">數量</label>
          <input type="number" class="form-control" id="inputPassword4" min="0">
        </div>
        <div class="form-group col-md-3">
          <label class="add-form-label" for="inputPassword4">備註</label>
          <input type="text" class="form-control" id="inputPassword4" placeholder="可空白...">
        </div>
      </div>
    </div>

    <div>
      <h1 class="text-dark bg-warning m-0">入庫</h1>
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">日期</th>
            <th scope="col">品番</th>
            <th scope="col">數量</th>
            <th scope="col">備註</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>2022/9/24</td>
            <td>XC7444001</td>
            <td>7</td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>2022/9/23</td>
            <td>XC7444001</td>
            <td>30</td>
            <td>調整庫存(扣除成品數)</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>2022/9/22</td>
            <td>XC7444001</td>
            <td>1</td>
            <td></td>
          </tr>
        </tbody>
      </table>


      <h1 class="text-white bg-success m-0">出庫</h1>
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">日期</th>
            <th scope="col">品番</th>
            <th scope="col">數量</th>
            <th scope="col">備註</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>2022/9/22</td>
            <td>XC7444001</td>
            <td>3158</td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>2022/9/22</td>
            <td>XC7444001</td>
            <td>3585</td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>


</template>

<script>
export default {

}
</script>

<style scoped>
td,
th {
  color: white;
}

.view {
  margin: 50px 100px 0px;
}

.add-form-label {
  color: aliceblue;
}
</style>