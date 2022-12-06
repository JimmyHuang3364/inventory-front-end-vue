<template>
  <div class="view bg-dark p-3" v-show="!isLoading">
    <div class="bg-dark mb-3 px-3">
      <div class="d-flex justify-content-between align-items-center">
        <h1 class="text-white">新增</h1>
        <div>
          <button @click.stop.prevent="addNewItem('warehousing')" class="btn btn-outline-warning mr-4">入庫</button>
          <button @click.stop.prevent="addNewItem('shipping')" class="btn btn-outline-success mr-4">出庫</button>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-3">
          <label class="add-form-label" for="inputDate">日期</label>
          <input v-model="newItem.date" type="date" class="form-control" id="inputDate">
        </div>
        <div class="form-group col-md-3">
          <label class="add-form-label" for="inputNmae">品番號</label>
          <input v-model="newItem.name" list="partNumbers-list" type="text" class="form-control" id="inputName">
          <datalist id="partNumbers-list">
            <option v-for="partNumber of partNumbersList" :key="partNumber.id" :value="partNumber.name"></option>
          </datalist>
        </div>
        <div class="form-group col-md-3">
          <label class="add-form-label" for="inputQuantity">數量</label>
          <input v-model="newItem.quantity" type="number" class="form-control" id="inputQuantity">
        </div>
        <div class="form-group col-md-3">
          <label class="add-form-label" for="inputNote">備註</label>
          <input v-model="newItem.note" type="text" class="form-control" id="inputNote" placeholder="可空白...">
        </div>
      </div>
    </div>

    <div>
      <div v-show="warehousingList.length > 0" class="mt-5">
        <h1 class="text-dark bg-warning m-0">入庫</h1>
        <table class="table table-hover table-striped table-dark">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">#</th>
              <th scope="col">日期</th>
              <th scope="col">品番</th>
              <th scope="col">數量</th>
              <th scope="col">備註</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in warehousingList" :key="index">
              <td style="width: 1%;">
                <button @click.stop.prevent="removeItem('warehousingList', index)" class="btn btn-outline-danger btn-sm rounded-circle">
                  X
                </button>
              </td>
              <th style="width: 1%;" scope="row">{{ index + 1 }}</th>
              <td style="width: 10%;">{{ item.date }}</td>
              <td style="width: 15%;">{{ item.name }}</td>
              <td style="width: 10%;">{{ item.quantity }}</td>
              <td>{{ item.note }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-show="shipmentList.length > 0" class="mt-5">
        <h1 class="text-white bg-success m-0">出庫</h1>
        <table class="table table-hover table-striped table-dark">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">#</th>
              <th scope="col">日期</th>
              <th scope="col">品番</th>
              <th scope="col">數量</th>
              <th scope="col">備註</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in shipmentList" :key="index">
              <td style="width: 1%;">
                <button @click.stop.prevent="removeItem('shipmentList', index)" class="btn btn-outline-danger btn-sm rounded-circle">
                  X
                </button>
              </td>
              <th style="width: 1%;" scope="row">{{ index + 1 }}</th>
              <td style="width: 10%;">{{ item.date }}</td>
              <td style="width: 15%;">{{ item.name }}</td>
              <td style="width: 10%;">{{ item.quantity }}</td>
              <td>{{ item.note }}</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
    <div v-if="shipmentList.length > 0 || warehousingList.length > 0" class="d-flex justify-content-end">
      <button @click.stop.prevent="handleSubmit" type="submit" class="btn btn-primary" :disabled="isProcessing">{{ isProcessing ? "處理中..." : "送出" }}</button>
    </div>
  </div>


</template>

<script>
/*eslint-disable*/
import { ToastBase, ToastBottom, ToastErrorCenter, ToastSuccessCenter } from '../utils/helpers'
import partNumbersAPI from '../apis/part_numbers'
import warehouseAPI from '../apis/warehouse'

export default {
  name: 'ShippingWarehousing',
  created() {
    this.fetchTodaysDate();
    this.fetchPartNumbers()
    this.fetchSubPartNumbers()
    this.isLoading = !this.isLoading
  },
  data() {
    return {
      partNumbersList: [],
      subPartNumbersList: [],
      newItem: {
        productId: '',
        date: '',
        name: '',
        quantity: '',
        note: '',
        isSubPart: false
      },
      shipmentList: [],
      warehousingList: [],
      isProcessing: false,
      isLoading: true
    }
  },
  methods: {
    async fetchPartNumbers() {
      try {
        const { data, status, statusText } = await partNumbersAPI.getPartNumbers()
        if (statusText !== 'OK' && status !== 200) { throw new Error() }
        const { partNumbers } = data
        this.partNumbersList = partNumbers
      } catch (error) {
        ToastBottom.fire({
          icon: 'error',
          title: '載入資料錯誤，請稍後在試。'
        })
      }
    },
    async fetchSubPartNumbers() {
      try {
        const { data, status, statusText } = await partNumbersAPI.getSubPartNumbers()
        if (statusText !== 'OK' && status !== 200) { throw new Error() }
        const { subPartNumbers } = data
        this.subPartNumbersList = subPartNumbers
      } catch (error) {
        ToastBottom.fire({
          icon: 'error',
          title: '載入資料錯誤，請稍後在試。'
        })
      }
    },
    fetchTodaysDate() {
      let thisYear = (new Date().getFullYear()).toString()
      let thisMonth = ''
      let thisDate = ''

      if (new Date().getMonth() < 9) { thisMonth = `0${(new Date().getMonth() + 1).toString()}` } else { thisMonth = (new Date().getMonth() + 1).toString() }
      if (new Date().getDate() < 10) { thisDate = `0${new Date().getDate().toString()}` } else { thisDate = new Date().getDate().toString() }

      const todaysDate = `${thisYear}-${thisMonth}-${thisDate}`
      this.newItem.date = todaysDate
    },
    async addNewItem(action) {
      try {
        //檢查資料完整性
        const { date, name, quantity } = this.newItem
        if (!date || !name || !quantity) {
          ToastBase.fire({
            icon: 'warning',
            title: '日、品番號、數量不可空白'
          })
          return
        }
        //
        //檢查該品番是否存在
        let isExist = false
        this.partNumbersList.map(partNumber => {
          if (partNumber.name === this.newItem.name) {
            this.newItem.productId = partNumber.id
            //檢查是否有子部品並設定好每單位使用量
            const { subPartNumbers } = partNumber
            if (subPartNumbers.length) {
              for (const subPartNumber of subPartNumbers) {
                if (!subPartNumber.usagePerUnit > 0) { throw new Error(`${partNumber.name} 其子部品 ${subPartNumber.name} 尚未設定每單位使用量`) }
              }
            }
            isExist = true
          }
        })
        this.subPartNumbersList.map(subPartNumbers => {
          if (subPartNumbers.name === this.newItem.name) {
            this.newItem.productId = subPartNumbers.id
            this.newItem.isSubPart = true
            isExist = true
          }
        })
        if (!isExist) { throw new Error('此品番不存在') }
        //
        if (action === 'warehousing') {
          this.warehousingList.push({
            ...this.newItem
          })
          this.newItem.productId = ''
          this.newItem.name = ''
          this.newItem.quantity = ''
          this.newItem.note = ''
          this.newItem.isSubPart = false
          return
        }

        if (action === 'shipping') {
          this.shipmentList.push({
            ...this.newItem
          })
          this.newItem.productId = ''
          this.newItem.name = ''
          this.newItem.quantity = ''
          this.newItem.note = ''
          this.newItem.isSubPart = false
          return
        }
      } catch (error) {
        ToastBase.fire({
          icon: 'error',
          title: error ? error : '發生不明錯誤!'
        })
      }
    },
    async removeItem(list, index) {
      try {

        if (list === 'warehousingList') {
          this.warehousingList.splice(index, 1)
          return
        }

        if (list === 'shipmentList') {
          this.shipmentList.splice(index, 1)
          return
        }

      } catch (error) {
        ToastBottom.fire({
          icon: 'error',
          title: '錯誤，再試一次。'
        })
      }
    },
    async handleSubmit() {
      try {
        this.isProcessing = true
        if (this.warehousingList.length) {
          const WarehousingFormData = new FormData()
          WarehousingFormData.append('warehousingList', JSON.stringify(this.warehousingList))
          const { data, statusText } = await warehouseAPI.Warehousing.create(WarehousingFormData)
          const WarehousingDataStatus = data.status
          const WarehousingDataMessage = data.message
          console.log(WarehousingDataStatus)
          if (WarehousingDataStatus !== 'success' && statusText !== 'OK') { throw new Error(WarehousingDataMessage ? WarehousingDataMessage : `入庫時發生錯誤，請稍後在試。`) }
          this.warehousingList = []
        }

        if (this.shipmentList.length) {
          const shippingFormData = new FormData()
          shippingFormData.append('shipmentList', JSON.stringify(this.shipmentList))
          const { data, statusText } = await warehouseAPI.Shipping.create(shippingFormData)
          const shippingDataStatus = data.status
          const shippingDataMessage = data.message
          if (shippingDataStatus !== 'success' && statusText !== 'OK') { throw new Error(shippingDataMessage ? shippingDataMessage : `出貨時發生錯誤，請稍後在試。`) }
          this.shipmentList = []
        }

        ToastSuccessCenter.fire({
          title: '成功',
          text: `資料登載成功`
        })
        this.isProcessing = false

      } catch (error) {
        ToastErrorCenter.fire({
          title: 'Oops...',
          text: error.message
        })
        this.isProcessing = false
      }


    }
  },
}
</script>

<style scoped>
td,
th {
  color: white;
}

.view {
  margin: 50px 100px 0px;
  border: 5px solid rgb(97, 134, 190);
  border-radius: 20px;
}

.add-form-label {
  color: aliceblue;
}
</style>