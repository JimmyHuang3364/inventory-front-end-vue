<template>
  <div v-show="!isLoading" class="histories_area">

    <div v-if="isShowFastShippingWarehousingFormArea" class="view bg-dark mb-3 px-3">
      <div class="d-flex justify-content-between align-items-center">
        <h1 class="text-white">新增</h1>
        <div>
          <button @click.stop.prevent="handleSubmitWarehousing" class="btn btn-outline-warning mr-4">入庫</button>
          <button @click.stop.prevent="handleSubmitShipping" class="btn btn-outline-success mr-4">出庫</button>
          <button @click.stop.prevent="toggleShowFastShippingWarehousingFormArea" class="btn btn-outline-danger mr-2">Close</button>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-3">
          <label class="add-form-label" for="inputDate">日期</label>
          <input v-model="newWarehousingOrShipping.date" type="date" class="form-control" id="inputDate">
        </div>
        <div class="form-group col-md-3">
          <label class="add-form-label" for="inputNmae">品番號</label>
          <input v-model="newWarehousingOrShipping.name" list="partNumbers-list" type="text" class="form-control" id="inputName">
          <datalist id="partNumbers-list">
            <option v-for="item of partNumbersAndSubPartNumbersList" :key="item.index" :value="item.name"></option>
          </datalist>
        </div>
        <div class="form-group col-md-3">
          <label class="add-form-label" for="inputQuantity">數量</label>
          <input v-model="newWarehousingOrShipping.quantity" type="number" class="form-control" id="inputQuantity" min="0">
        </div>
        <div class="form-group col-md-3">
          <label class="add-form-label" for="inputNote">備註</label>
          <input v-model="newWarehousingOrShipping.note" type="text" class="form-control" id="inputNote" placeholder="可空白...">
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
import { ToastBottom } from '../utils/helpers'
import partNumbersAPI from '../apis/part_numbers'
import warehouseAPI from '../apis/warehouse'

export default {
  inject: ['reload'],
  props: {
    initialWarehousingHistories: {
      type: Array,
    },
    initialIsShowFastShippingWarehousingFormArea: {
      type: Boolean
    },
    initialPartNumbers: {
      type: Array
    }
  },
  created() {
    this.fetchInitialWarehousingHistories(this.initialWarehousingHistories);
    this.fetchIsShowFastShippingWarehousingFormArea(this.initialIsShowFastShippingWarehousingFormArea)
    this.fetchInitialPartNumbers(this.initialPartNumbers)
    this.fetchSubPartNumbers()
    this.fetchTodaysDate()
    // this.mergePartNumbersAndSubPartNumbersToList() 這邊呼叫無變化，故從 this.fetchSubPartNumbers() 裡面呼叫。
    this.isLoading = false
  },
  data() {
    return {
      newWarehousingOrShipping: {
        date: '',
        name: '',
        quantity: null,
        note: '',
        productId: '',
        isSubPart: false
      },
      partNumbersList: [],
      subPartNumbersList: [],
      partNumbersAndSubPartNumbersList: [],
      warehousingHistories: [],
      shipmentList: [],
      warehousingList: [],
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
    fetchInitialPartNumbers(newValue) {
      this.partNumbersList = newValue
    },
    async fetchSubPartNumbers() {
      try {
        const { data, status, statusText } = await partNumbersAPI.getSubPartNumbers()
        if (statusText !== 'OK' && status !== 200) { throw new Error() }
        const { subPartNumbers } = data
        this.subPartNumbersList = subPartNumbers
        this.mergePartNumbersAndSubPartNumbersToList() // 從created呼叫無變化，所以從這邊呼叫
      } catch (error) {
        ToastBottom.fire({
          icon: 'error',
          title: '載入資料錯誤，請稍後在試。'
        })
      }
    },
    mergePartNumbersAndSubPartNumbersToList() {  // 合併partNumbersList & subPartNumbersList 至 partNumbersAndSubPartNumbersList 給 品番號 option element 使用
      this.partNumbersAndSubPartNumbersList = this.partNumbersList.concat(this.subPartNumbersList)
    },
    async handleSubmitWarehousing() {
      try {
        if (!this.verifyDataAfterSubmit()) { throw new Error('日期、品番號、數量不可空白') } // 驗證資料完整性
        this.warehousingList.push(this.fetchPartNumberIdOrSubPartNumberId())
        const WarehousingFormData = new FormData()
        WarehousingFormData.append('warehousingList', JSON.stringify(this.warehousingList))
        const { data, statusText } = await warehouseAPI.Warehousing.create(WarehousingFormData)
        const WarehousingDataStatus = data.status
        const WarehousingDataMessage = data.message
        if (WarehousingDataStatus !== 'success' && statusText !== 'OK') { throw new Error(WarehousingDataMessage ? WarehousingDataMessage : `入庫時發生錯誤，請稍後在試。`) }
        this.warehousingList = []
        ToastBottom.fire({
          icon: 'success',
          title: `入庫資料登載成功`
        })
        this.reload();
      }
      catch (error) {
        ToastBottom.fire({
          icon: "error",
          title: error ? error : "拿取製程項目清單錯誤，請稍後再試。"
        })
      }
    },
    async handleSubmitShipping() {
      try {
        if (!this.verifyDataAfterSubmit()) { throw new Error('日期、品番號、數量不可空白') } // 驗證資料完整性
        if (!this.checkPartOrSubPartQuantityToShip()) { throw new Error('數量不足以出貨，請檢查在庫量。') }
        this.shipmentList.push(this.fetchPartNumberIdOrSubPartNumberId())
        const shippingFormData = new FormData()
        shippingFormData.append('shipmentList', JSON.stringify(this.shipmentList))
        const { data, statusText } = await warehouseAPI.Shipping.create(shippingFormData)
        const shippingDataStatus = data.status
        const shippingDataMessage = data.message
        if (shippingDataStatus !== 'success' && statusText !== 'OK') { throw new Error(shippingDataMessage ? shippingDataMessage : `出貨時發生錯誤，請稍後在試。`) }
        this.shipmentList = []
        ToastBottom.fire({
          icon: 'success',
          title: `出庫資料登載成功`
        })
        this.reload();
      }
      catch (error) {
        ToastBottom.fire({
          icon: "error",
          title: error ? error : "拿取製程項目清單錯誤，請稍後再試。"
        })
      }
    },
    verifyDataAfterSubmit() {  // 驗證資料完整性
      if (
        this.newWarehousingOrShipping.date !== '' &&
        this.newWarehousingOrShipping.name !== '' &&
        Number(this.newWarehousingOrShipping.quantity) > 0
      ) {
        return true
      }
    },
    fetchPartNumberIdOrSubPartNumberId() {
      try {
        for (let partNumber of this.partNumbersList) {
          if (partNumber.name === this.newWarehousingOrShipping.name) {
            this.newWarehousingOrShipping.productId = partNumber.id
            return this.newWarehousingOrShipping
          }
        }

        for (let subPartNumber of this.subPartNumbersList) {
          if (subPartNumber.name === this.newWarehousingOrShipping.name) {
            this.newWarehousingOrShipping.productId = subPartNumber.id
            this.newWarehousingOrShipping.isSubPart = true
            return this.newWarehousingOrShipping
          }
        }
      }
      catch (error) {
        ToastBottom.fire({
          icon: "error",
          title: "取得不品ID時出現錯誤。"
        })
      }
    },
    checkPartOrSubPartQuantityToShip() {
      for (let partNumber of this.partNumbersList) {
        if (partNumber.name === this.newWarehousingOrShipping.name) {
          if ((partNumber.quantity - Number(this.newWarehousingOrShipping.quantity)) >= 0) {
            return true
          } else {
            return false
          }
        }
      }

      for (let subPartNumber of this.subPartNumbersList) {
        if (subPartNumber.name === this.newWarehousingOrShipping.name) {
          if ((subPartNumber.quantity - Number(this.newWarehousingOrShipping.quantity)) >= 0) {
            return true
          } else {
            return false
          }
        }
      }
    },
    toggleShowFastShippingWarehousingFormArea() {
      this.$emit('after-click-toggle-fast-form-area')
    },
    fetchTodaysDate() {
      let thisYear = (new Date().getFullYear()).toString()
      let thisMonth = ''
      let thisDate = ''

      if (new Date().getMonth() < 9) { thisMonth = `0${(new Date().getMonth() + 1).toString()}` } else { thisMonth = (new Date().getMonth() + 1).toString() }
      if (new Date().getDate() < 10) { thisDate = `0${new Date().getDate().toString()}` } else { thisDate = new Date().getDate().toString() }

      const todaysDate = `${thisYear}-${thisMonth}-${thisDate}`
      this.newWarehousingOrShipping.date = todaysDate
    },
  },
  watch: {
    initialWarehousingHistories(newValue) {
      this.fetchInitialWarehousingHistories(newValue)
    },
    initialIsShowFastShippingWarehousingFormArea(newValue) {
      this.fetchIsShowFastShippingWarehousingFormArea(newValue)
    },
    initialPartNumbers(newValue) {
      this.fetchInitialPartNumbers(newValue)
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
