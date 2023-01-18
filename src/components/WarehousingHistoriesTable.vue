<template>
  <div v-show="!isLoading" class="histories_area">

    <div v-show="isShowFastShippingWarehousingFormArea" class="view bg-dark mb-3 px-3">
      <div class="d-flex justify-content-between align-items-center">
        <h1 class="text-white">新增</h1>
        <div>
          <button class="btn btn-outline-warning mr-4">入庫</button>
          <button class="btn btn-outline-success mr-4">出庫</button>
          <button @click="toggleShowFastShippingWarehousingFormArea" class="btn btn-outline-danger mr-2">Close</button>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-3">
          <label class="add-form-label" for="inputDate">日期</label>
          <input type="date" class="form-control" id="inputDate">
        </div>
        <div class="form-group col-md-3">
          <label class="add-form-label" for="inputNmae">品番號</label>
          <input list="partNumbers-list" type="text" class="form-control" id="inputName">
          <datalist id="partNumbers-list">
            <option></option>
          </datalist>
        </div>
        <div class="form-group col-md-3">
          <label class="add-form-label" for="inputQuantity">數量</label>
          <input type="number" class="form-control" id="inputQuantity">
        </div>
        <div class="form-group col-md-3">
          <label class="add-form-label" for="inputNote">備註</label>
          <input type="text" class="form-control" id="inputNote" placeholder="可空白...">
        </div>
      </div>
    </div>


    <table class="table table-sm table-dark table-striped table-hover">
      <thead>
        <tr class="table-active" style="text-align: center;">
          <th scope="col">
            <h4>日期</h4>
          </th>
          <th scope="col">
            <h4>品番</h4>
          </th>
          <th scope="col">
            <h4>入庫</h4>
          </th>
          <th scope="col">
            <h4>出庫</h4>
          </th>
          <th scope="col">
            <h4>餘存</h4>
          </th>
          <th scope="col">
            <h4>備註</h4>
          </th>
        </tr>
      </thead>

      <tbody>

        <tr v-for="WarehousingHistory in warehousingHistories" :key="WarehousingHistory.id" style="text-align: center;">
          <!--日期-->
          <th scope="row">{{ WarehousingHistory.textCreatedAt }}</th>
          <!--品番-->
          <td>{{ WarehousingHistory.PartNumber.name ? WarehousingHistory.PartNumber.name : WarehousingHistory.SubPartNumber.name }}</td>
          <!--入庫-->

          <td v-if="WarehousingHistory.quntityOfWarehousing" class="text-dark" style="background-color: #ea9d06;">{{ WarehousingHistory.quntityOfWarehousing }}</td>
          <td v-else>{{ WarehousingHistory.quntityOfWarehousing }}</td>
          <!--出庫-->
          <td v-if="WarehousingHistory.quntityOfShipping" class="bg-success">{{ WarehousingHistory.quntityOfShipping }}</td>
          <td v-else>{{ WarehousingHistory.quntityOfShipping }}</td>
          <!--餘存-->
          <td>{{ WarehousingHistory.totalQuntity }}</td>
          <!--備註-->
          <td>{{ WarehousingHistory.note }}</td>
        </tr>

      </tbody>

    </table>
  </div>
</template>

<script>
export default {
  props: {
    initialWarehousingHistories: {
      type: Array,
    },
    initialIsShowFastShippingWarehousingFormArea: {
      type: Boolean
    }
  },
  created() {
    this.fetchInitialWarehousingHistories(this.initialWarehousingHistories);
    this.fetchIsShowFastShippingWarehousingFormArea(this.initialIsShowFastShippingWarehousingFormArea)
    this.isLoading = false
  },
  data() {
    return {
      warehousingHistories: [],
      isLoading: true,
      isShowFastShippingWarehousingFormArea: false
    }
  },
  methods: {
    fetchInitialWarehousingHistories(newValue) {
      this.warehousingHistories = newValue
    },
    fetchIsShowFastShippingWarehousingFormArea(newValue) {
      this.isShowFastShippingWarehousingFormArea = newValue
    },
    toggleShowFastShippingWarehousingFormArea() {
      this.$emit('after-click-toggle-fast-form-area')
    }
  },
  watch: {
    initialWarehousingHistories(newValue) {
      this.fetchInitialWarehousingHistories(newValue)
    },
    initialIsShowFastShippingWarehousingFormArea(newValue) {
      this.fetchIsShowFastShippingWarehousingFormArea(newValue)
    }
  },
}
</script>

<style scoped>
.view {
  /* margin: 50px 100px 0px; */
  border: 5px solid rgb(97, 134, 190);
  border-radius: 5px;
}

.add-form-label {
  color: aliceblue;
}
</style>
