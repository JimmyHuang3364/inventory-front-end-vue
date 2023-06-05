<template>
  <div v-show="!isLoading" class="histories_area">

    <div v-show="isShowFastOutsourcingFormArea" class="view bg-dark mb-3 px-3">
      <div class="d-flex justify-content-between align-items-center">
        <h1 class="text-white">新增</h1>
        <div>
          <button @click="handleSubmit" class="btn btn-outline-warning mr-4" :disabled="isProcessing">{{ isProcessing ? '處理中...' : '送出' }}</button>
          <button @click="toggleShowFastShippingWarehousingFormArea" class="btn btn-outline-danger mr-2">Close</button>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md">
          <label class="add-form-label" for="inputDate">日期</label>
          <input v-model="newOutsourcing.actionDate" type="date" class="form-control" id="actionDate">
        </div>
        <div class="form-group col-md">
          <label class="add-form-label" for="inputNmae">品番號</label>
          <input v-model="newOutsourcing.partNumberName" list="partNumber-list" type="text" class="form-control" id="inputPartnerFactoryName">
          <datalist id="partNumber-list">
            <option v-for="partNumber of partNumbers" :key="partNumber.id" :value="partNumber.name"></option>
          </datalist>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md">
          <label class="add-form-label" for="inputNmae">廠商</label>
          <input v-model="newOutsourcing.partnerFactoryName" list="partnerFactories-list" type="text" class="form-control" id="inputPartnerFactoryName">
          <datalist id="partnerFactories-list">
            <option v-for="partnerFactory of partnerFactories" :key="partnerFactory.id" :value="partnerFactory.name"></option>
          </datalist>
        </div>
        <div class="form-group col-md">
          <label class="add-form-label" for="inputNmae">製程</label>
          <input v-model="newOutsourcing.productionProcessItemName" list="productionProcessItems-list" type="text" class="form-control" id="inputProductionProcessItemName">
          <datalist id="productionProcessItems-list">
            <option v-for="productionProcessItem of productionProcessItems" :key="productionProcessItem.id" :value="productionProcessItem.processName"></option>
          </datalist>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md">
          <label class="add-form-label" for="inputQuantity">數量</label>
          <input v-model="newOutsourcing.quantity" newOutsourcing type="number" class="form-control" id="inputQuantity" min="0">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md">
          <label class="add-form-label" for="inputNote">備註</label>
          <input v-model="newOutsourcing.note" type="text" class="form-control" id="inputNote" placeholder="可空白...">
        </div>
      </div>
    </div>

    <table class="table table-sm table-dark table-striped table-hover">
      <thead>
        <tr class="table-active" style="text-align: center;">
          <th scope="col">
            <h4>發包日</h4>
          </th>
          <th scope="col">
            <h4>品番</h4>
          </th>
          <th scope="col">
            <h4>廠商</h4>
          </th>
          <th scope="col">
            <h4>製程</h4>
          </th>
          <th scope="col">
            <h4>數量</h4>
          </th>
          <th scope="col">
            <h4>備註</h4>
          </th>
          <th scope="col">
            <h4>操作</h4>
          </th>
        </tr>
      </thead>

      <tbody>

        <tr v-for="outsourcinglist of outsourcinglists" :key="outsourcinglist.id" style="text-align: center;">
          <!--日期-->
          <th scope="row">{{ outsourcinglist.actionDate }}</th>
          <!--品番-->
          <td>{{ outsourcinglist.PartNumber.name ? outsourcinglist.PartNumber.name : outsourcinglist.SubPartNumber.name }}</td>
          <!--廠商-->
          <td>{{ outsourcinglist.PartnerFactory.name }}</td>
          <!--製程-->
          <td>{{ outsourcinglist.ProductionProcessItem.processName }}</td>
          <!--數量-->
          <td>{{ outsourcinglist.quantity }}</td>
          <!--備註-->
          <td>{{ outsourcinglist.note }}</td>

          <td>
            <div class="d-flex justify-content-around">
              <button @click.stop.prevent="theOutsourcingIsDoneToSubmit(outsourcinglist.id, { partNumberId: outsourcinglist.PartNumber.id, quantity: outsourcinglist.quantity })" class="btn btn-outline-success btn-sm">
                Done
              </button>

              <button @click.stop.prevent="deleteOutsourcing(outsourcinglist.id, { partNumberId: outsourcinglist.PartNumber.id, quantity: outsourcinglist.quantity })" class="btn btn-outline-danger btn-sm ml-3">
                Delete
              </button>
            </div>
          </td>
        </tr>

      </tbody>

    </table>
  </div>
</template>

<script>
/* eslint-disable */
import { ToastBottom, OutsourcingIsDoneToWhere } from '../utils/helpers'
import warehouseAPI from '../apis/warehouse'
import partnerFactoriesAPI from '../apis/partner_factories'
import ProductionProcessItemsAPI from '../apis/production_process_items'

// import Loader from '../components/Loader.vue'
export default {
  props: {
    initialIsShowFastOutsourcingFormArea: {
      type: Boolean
    },
    initialPartNumbers: {
      type: Array
    }
  },
  created() {
    this.fetchPartNumbers(this.initialPartNumbers)
    this.fetchOutsourcingLists()
    this.fetchPartnerFactories()
    this.fetchProductionProcessItems()
    this.fetchIsShowFastOutsourcingFormArea(this.initialIsShowFastOutsourcingFormArea)
    this.fetchTodaysDate()
    this.isLoading = false
  },
  data() {
    return {
      isLoading: true,
      isShowFastOutsourcingFormArea: false,
      isProcessing: false,
      newOutsourcing: {
        actionDate: '',
        partNumberName: '',
        partnerFactoryName: '',
        productionProcessItemName: '',
        partNumberId: '',
        partnerFactoryId: '',
        productionProcessItemId: '',
        quantity: null,
        note: ''
      },
      outsourcinglists: [],
      partnerFactories: [],
      partNumbers: [],
      productionProcessItems: [],
      subPartNumbers: []
    }
  },
  methods: {
    async fetchOutsourcingLists() {
      try {
        const response = await warehouseAPI.Outsourcinglist.get()
        const { data, status, statusText } = response
        const { outsourcinglists } = data
        if (statusText !== "OK" && status !== 200) { throw new Error() }
        if (data.status !== 'success') { throw new Error(data.message) }
        outsourcinglists.map(outsourcinglist => {
          outsourcinglist.actionDate = `${new Date(outsourcinglist.actionDate).getFullYear()}/${new Date(outsourcinglist.actionDate).getMonth() + 1}/${new Date(outsourcinglist.actionDate).getDate()}`
        })
        this.outsourcinglists = outsourcinglists
      }
      catch (error) {
        ToastBottom.fire({
          icon: "error",
          title: error ? error : "外包清單載入錯誤，請稍後再試。"
        });
        this.isLoading = false
      }
    },
    async fetchPartnerFactories() {
      try {
        const { data, status, statusText } = await partnerFactoriesAPI.getAll()
        const { partnerFactories } = data
        if (statusText !== "OK" && status !== 200) { throw new Error() }
        if (data.status !== 'success') { throw new Error(data.message) }
        this.partnerFactories = partnerFactories
      }
      catch (error) {
        ToastBottom.fire({
          icon: "error",
          title: error ? error : "拿取協力商清單錯誤，請稍後再試。"
        })
      }
    },
    async fetchProductionProcessItems() {
      try {
        const { data, status, statusText } = await ProductionProcessItemsAPI.getAll()
        const { productionProcessItems } = data
        if (statusText !== "OK" && status !== 200) { throw new Error() }
        if (data.status !== 'success') { throw new Error(data.message) }
        this.productionProcessItems = productionProcessItems
      }
      catch (error) {
        ToastBottom.fire({
          icon: "error",
          title: error ? error : "拿取製程項目清單錯誤，請稍後再試。"
        })
      }
    },
    async handleSubmit() {  //新增外包
      try {
        this.isProcessing = true
        const checkPartNumberQuantity = (partNumberName, outsourcingAmount) => { //  檢查數量是否足夠function
          let left = -1, right = this.partNumbers.length
          while (left + 1 !== right) {
            let mid = Math.floor((left + right) / 2)
            if (this.partNumbers[mid].name === partNumberName) {
              if (this.partNumbers[mid].quantity - outsourcingAmount < 0) {
                throw new Error(`"${partNumberName}" 數量不足以發外包`)
              } else {
                return
              }

            } else if (this.partNumbers[mid].name < partNumberName) {
              left = mid
            } else {
              right = mid
            }
          }
          return { result: false, message: '找不到此部品' }
        }
        //
        if (!this.verifyDataAfterSubmit()) { throw new Error('日期、品番號、廠商、製程、數量不可空白') }
        checkPartNumberQuantity(this.newOutsourcing.partNumberName, this.newOutsourcing.quantity) // 呼叫檢查數量是否足夠
        this.fetchAllItemIdAfterSubmit()
        const outsourcingFormData = new FormData()
        outsourcingFormData.append('outsourcinglist', JSON.stringify([this.newOutsourcing]))
        const { data, status, statusText } = await warehouseAPI.Outsourcinglist.create(outsourcingFormData)
        if (status !== 200 && statusText !== 'OK') { throw new Error() }
        if (data.status !== 'success') { throw new Error(data.message) }
        this.outsourcinglists.unshift(this.unshiftOutsourcingDataAfterSubmit(this.newOutsourcing, data.outsourcinglists[0]))
        this.$emit('after-submited-new', data.partNumbers[0], data.warehousingHistories[0], data.outsourcinglists[0].actionDate)
        this.newOutsourcing = { ...this.clearDataAfterSubmit() }
        this.fetchTodaysDate()
        this.isProcessing = false
        ToastBottom.fire({
          icon: "success",
          text: data.message
        })
      } catch (error) {
        this.isProcessing = false
        ToastBottom.fire({
          icon: "error",
          title: error ? error : "拿取製程項目清單錯誤，請稍後再試。"
        })
      }
    },
    verifyDataAfterSubmit() {
      if (
        this.newOutsourcing.actionDate !== '' &&
        this.newOutsourcing.partNumberName !== '' &&
        this.newOutsourcing.partnerFactoryName !== '' &&
        this.newOutsourcing.productionProcessItemName !== '' &&
        Number(this.newOutsourcing.quantity) > 0
      ) {
        return true
      }

      return false
    },
    fetchAllItemIdAfterSubmit() {  //拿取部品ID
      this.partNumbers.map(partNumber => {
        if (partNumber.name === this.newOutsourcing.partNumberName) {
          return this.newOutsourcing.partNumberId = partNumber.id
        }
      })
      this.partnerFactories.map(partnerFactory => {
        if (partnerFactory.name === this.newOutsourcing.partnerFactoryName) {
          return this.newOutsourcing.partnerFactoryId = partnerFactory.id
        }
      })
      this.productionProcessItems.map(productionProcessItem => {
        if (productionProcessItem.processName === this.newOutsourcing.productionProcessItemName) {
          return this.newOutsourcing.productionProcessItemId = productionProcessItem.id
        }
      })
    },
    unshiftOutsourcingDataAfterSubmit(newData, resOutsourcinglists) {
      let outsourcingData = {
        PartNumber: {
          id: newData.partNumberId,
          name: newData.partNumberName
        },
        PartnerFactory: {
          id: newData.partnerFactoryId,
          name: newData.partnerFactoryName
        },
        ProductionProcessItem: {
          id: newData.productionProcessItemId,
          processName: newData.productionProcessItemName
        },
        actionDate: `${new Date(resOutsourcinglists.actionDate).getFullYear()}/${new Date(resOutsourcinglists.actionDate).getMonth() + 1}/${new Date(resOutsourcinglists.actionDate).getDate()}`,
        estimatedReturnDate: null,
        id: resOutsourcinglists.id,
        quantity: Number(newData.quantity)
      }
      return outsourcingData
    },
    clearDataAfterSubmit() {
      let cleanData = {
        actionDate: '',
        partNumberName: '',
        partnerFactoryName: '',
        productionProcessItemName: '',
        partNumberId: '',
        partnerFactoryId: '',
        productionProcessItemId: '',
        quantity: null,
        note: ''
      }
      return cleanData
    },
    async deleteOutsourcing(outsourcinglistId, outsourcingData) {
      try {
        const { data, status, statusText } = await warehouseAPI.Outsourcinglist.delete(outsourcinglistId)
        if (statusText !== "OK" && status !== 200) { throw new Error() }
        if (data.status !== 'success') { throw new Error(data.message) }
        this.$emit('outsourcing-delete', outsourcingData)  //修改頁面(將數量加回去)
        this.outsourcinglists = this.outsourcinglists.filter(outsourcinglist => outsourcinglist.id !== outsourcinglistId)
        ToastBottom.fire({
          icon: "success",
          title: data.message
        })
      }
      catch (error) {
        ToastBottom.fire({
          icon: "error",
          title: error ? error : "拿取製程項目清單錯誤，請稍後再試。"
        })
      }
    },
    async theOutsourcingIsDoneToSubmit(outsourcinglistId, outsourcingData) { // 外包完成回廠
      try {
        const inputBoxPartNumberName = await OutsourcingIsDoneToWhere.fire({  //部品名稱輸入詢問對話框
          inputValidator: (value) => {
            if (!value) { return '請輸入部品番!' }
            const findOnePartNumber = (partNumbers, subPartNumbers, name) => {
              let left = -1, right = partNumbers.length
              while (left + 1 !== right) {  //搜尋是否有這部品
                let mid = Math.floor((left + right) / 2)
                if (partNumbers[mid].name === name) { return true }
                else if (partNumbers[mid].name < name) { left = mid }
                else if (partNumbers[mid].name > name) { right = mid }
              }
              left = -1, right = subPartNumbers.length
              while (left + 1 !== right) {  //搜尋是否有這子部品
                let mid = Math.floor((left + right) / 2)
                if (subPartNumbers[mid].name === name) { return true }
                else if (subPartNumbers[mid].name < name) { left = mid }
                else if (subPartNumbers[mid].name > name) { right = mid }
              }
              return null
            }
            if (!findOnePartNumber(this.partNumbers, this.subPartNumbers, value)) { return '找不到此部品' }
          }
        })
        if (!inputBoxPartNumberName.value) { return }
        const formData = new FormData()
        const fetchPartNumberId = (partNumberName) => { // 拿取部品ID
          let left = -1, right = this.partNumbers.length
          while (left + 1 !== right) { //查找母部品
            let mid = Math.floor((left + right) / 2)
            if (this.partNumbers[mid].name === partNumberName) { return { id: this.partNumbers[mid].id, isSub: false } }
            if (this.partNumbers[mid].name < partNumberName) { left = mid; continue }
            if (this.partNumbers[mid].name > partNumberName) { right = mid; continue }
          }
          left = -1, right = this.subPartNumbers.length
          while (left + 1 !== right) { //查找子部品
            let mid = Math.floor((left + right) / 2)
            if (this.subPartNumbers[mid].name === partNumberName) { return { id: this.subPartNumbers[mid].id, isSub: true } }
            if (this.subPartNumbers[mid].name < partNumberName) { left = mid; continue }
            if (this.subPartNumbers[mid].name > partNumberName) { right = mid; continue }
          }
          return null
        }
        let fetchedPartNumberData = fetchPartNumberId(inputBoxPartNumberName.value)
        outsourcingData.partNumberId = fetchedPartNumberData.id
        outsourcingData.isSub = fetchedPartNumberData.isSub
        outsourcingData.partNumberName = inputBoxPartNumberName.value
        formData.append('partNumberId', JSON.stringify(outsourcingData.partNumberId))
        formData.append('quantity', JSON.stringify(outsourcingData.quantity))
        formData.append('isSub', JSON.stringify(outsourcingData.isSub))
        const { data, status, statusText } = await warehouseAPI.Outsourcinglist.done(outsourcinglistId, formData)
        if (statusText !== "OK" && status !== 200) { throw new Error() }
        if (data.status !== 'success') { throw new Error(data.message) }
        this.outsourcinglists = this.outsourcinglists.filter(outsourcinglist => outsourcinglist.id !== outsourcinglistId)
        data.warehousingHistory.partNumberName = inputBoxPartNumberName.value
        this.$emit('outsourcing-is-done-to-submit', outsourcingData, data.warehousingHistory)
        ToastBottom.fire({
          icon: "success",
          text: data.message
        })
      }
      catch (error) {
        ToastBottom.fire({
          icon: "error",
          title: error ? error : "拿取製程項目清單錯誤，請稍後再試。"
        })
      }
    },
    fetchPartNumbers(newValue) {
      this.partNumbers = newValue
      for (let partNumber of newValue) {
        if (partNumber.SubPartNumbers.length) {
          this.subPartNumbers.push(...partNumber.SubPartNumbers)
        }
      }

    },
    fetchIsShowFastOutsourcingFormArea(newValue) {
      this.isShowFastOutsourcingFormArea = newValue
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
      this.newOutsourcing.actionDate = todaysDate
    },
  },
  watch: {
    initialIsShowFastOutsourcingFormArea(newValue) {
      this.fetchIsShowFastOutsourcingFormArea(newValue)
    },
    initialPartNumbers(newValue) {
      this.fetchPartNumbers(newValue)
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