<template>
  <div>
    <div v-if="isLoading">
      <Loader />
    </div>
    <div v-if="!isLoading" class="view bg-dark mb-3 p-3">
      <div class="d-flex justify-content-between align-items-center">
        <h1 class="text-white">新增</h1>
        <div>
          <button @click.stop.prevent="addNewOutsourcingToNewoutsourcingLists" class="btn btn-outline-warning mr-4">加入</button>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-2">
          <label class="add-form-label" for="inputDate">日期</label>
          <input v-model="newOutsourcing.actionDate" type="date" class="form-control" id="inputDate">
        </div>
        <div class="form-group col-md-2">
          <label class="add-form-label" for="inputNmae">品番號</label>
          <input v-model="newOutsourcing.partNumberName" list="partNumbers-list" type="text" class="form-control" id="inputName">
          <datalist id="partNumbers-list">
            <option v-for="partNumber of partNumbersList" :key="partNumber.id" :value="partNumber.name"></option>
          </datalist>
        </div>
        <div class="form-group col-md-2">
          <label class="add-form-label" for="inputNmae">廠商</label>
          <select v-model="newOutsourcing.partnerFactoryId" class="custom-select" id="inputPartnerFactoryName">
            <option value="" selected>Choose...</option>
            <option v-for="partnerFactory of partnerFactories" :key="partnerFactory.id" :value="partnerFactory.id">{{ partnerFactory.name }}</option>
          </select>
        </div>
        <div class="form-group col-md-2">
          <label class="add-form-label" for="inputNmae">製程</label>
          <select v-model="newOutsourcing.productionProcessItemId" class="custom-select" id="inputPartnerFactoryName">
            <option value="" selected>Choose...</option>
            <option v-for="productionProcessItem of productionProcessItems" :key="productionProcessItem.id" :value="productionProcessItem.id">{{ productionProcessItem.processName }}</option>
          </select>
        </div>
        <div class="form-group col-md-2">
          <label class="add-form-label" for="inputQuantity">數量</label>
          <input v-model="newOutsourcing.quantity" type="number" class="form-control" id="inputQuantity">
        </div>
        <div class="form-group col-md-2">
          <label class="add-form-label" for="inputNote">備註</label>
          <input v-model="newOutsourcing.note" type="text" class="form-control" id="inputNote" placeholder="可空白...">
        </div>
      </div>


      <div>
        <div v-show="newOutsourcingLists.length > 0" class="mt-5">
          <h1 class="text-light text-center">清單</h1>
          <table class="table table-hover table-striped table-dark">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">#</th>
                <th scope="col">日期</th>
                <th scope="col">品番</th>
                <th scope="col">廠商</th>
                <th scope="col">製程</th>
                <th scope="col">數量</th>
                <th scope="col">備註</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in newOutsourcingLists" :key="index">
                <td style="width: 1%;">
                  <button @click.stop.prevent="removeItem(index)" class="btn btn-outline-danger btn-sm rounded-circle">
                    X
                  </button>
                </td>
                <th style="width: 1%;" scope="row">{{ index + 1 }}</th>
                <td style="width: 10%;">{{ item.actionDate }}</td>
                <td style="width: 15%;">{{ item.partNumberName }}</td>
                <td style="width: 15%;">{{ item.partnerFactoryName }}</td>
                <td style="width: 15%;">{{ item.productionProcessItemName }}</td>
                <td style="width: 10%;">{{ item.quantity }}</td>
                <td>{{ item.note }}</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
      <div v-if="newOutsourcingLists.length > 0" class="d-flex justify-content-end">
        <button @click.stop.prevent="handleAfterSubmit" type="submit" class="btn btn-primary" :disabled="isProcessing">{{ isProcessing? "處理中...": "送出" }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '../components/Loader.vue';
import { ToastBottom } from '../utils/helpers'
import warehouseAPI from '../apis/warehouse'
import partNumbersAPI from '../apis/part_numbers'
import partnerFactoriesAPI from '../apis/partner_factories'
import ProductionProcessItemsAPI from '../apis/production_process_items'

export default {
  name: 'Outsourcing',
  components: { Loader, },
  created() {
    this.fetchPartNumers();
    this.fetchPartnerFactories();
    this.fetchProductionProcessItems();
    this.isLoading = false
  },
  data() {
    return {
      blankNewOutsourcing: {
        actionDate: '',
        partNumberName: '',
        partnerFactoryName: '',
        productionProcessItemName: '',
        partNumberId: '',
        partnerFactoryId: '',
        productionProcessItemId: '',
        quantity: 0,
        note: ''
      },
      newOutsourcing: {
        actionDate: '',
        partNumberName: '',
        partnerFactoryName: '',
        productionProcessItemName: '',
        partNumberId: '',
        partnerFactoryId: '',
        productionProcessItemId: '',
        quantity: 0,
        note: ''
      },
      newOutsourcingLists: [],
      partNumbersList: [],
      partnerFactories: [],
      productionProcessItems: [],
      isLoading: true,
      isProcessing: false
    }
  },
  methods: {
    async fetchPartNumers() {
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
    addNewOutsourcingToNewoutsourcingLists() {
      try {
        if (!this.verifyDataAfterAddNewClick()) { throw new Error('日期、品番號、廠商、製程、數量不可空白') }
        this.fetchAllItemIdAfterSubmit()  //呼叫代入各項對應PK ID函式
        this.newOutsourcingLists.push(this.newOutsourcing)  //加入待送出清單
        this.newOutsourcing = { ...this.blankNewOutsourcing }  //清空表單
      }
      catch (error) {
        ToastBottom.fire({
          icon: "error",
          title: error ? error : "拿取製程項目清單錯誤，請稍後再試。"
        })
      }
    },
    verifyDataAfterAddNewClick() { //驗證資料完整性
      if (
        this.newOutsourcing.actionDate !== '' &&
        this.newOutsourcing.partNumberName !== '' &&
        this.newOutsourcing.partnerFactoryId !== '' &&
        this.newOutsourcing.productionProcessItemId !== '' &&
        Number(this.newOutsourcing.quantity) > 0
      ) {
        return true
      }
    },
    fetchAllItemIdAfterSubmit() {  //代入partNumber對應PK；代入partnerFactories、partnerFactories對應name
      this.partNumbersList.map(partNumber => {
        if (partNumber.name === this.newOutsourcing.partNumberName) {
          return this.newOutsourcing.partNumberId = partNumber.id
        }
      })
      this.partnerFactories.map(partnerFactory => {
        if (partnerFactory.id === this.newOutsourcing.partnerFactoryId) {
          return this.newOutsourcing.partnerFactoryName = partnerFactory.name
        }
      })
      this.productionProcessItems.map(productionProcessItem => {
        if (productionProcessItem.id === this.newOutsourcing.productionProcessItemId) {
          return this.newOutsourcing.productionProcessItemName = productionProcessItem.processName
        }
      })
    },
    removeItem(index) {
      try {
        this.newOutsourcingLists.splice(index, 1)
      } catch (error) {
        ToastBottom.fire({
          icon: 'error',
          title: '錯誤，再試一次。'
        })
      }
    },
    async handleAfterSubmit() {
      try {
        this.isProcessing = true
        const outsourcingFormData = new FormData()
        outsourcingFormData.append('outsourcinglist', JSON.stringify(this.newOutsourcingLists))
        const { data, status, statusText } = await warehouseAPI.Outsourcinglist.create(outsourcingFormData)
        if (status !== 200 && statusText !== 'OK') { throw new Error() }
        if (data.status !== 'success') { throw new Error(data.message) }
        this.newOutsourcingLists = []
        this.isProcessing = false
        ToastBottom.fire({
          icon: "success",
          text: data.message
        })
      }
      catch (error) {
        this.isProcessing = false
        ToastBottom.fire({
          icon: "error",
          title: error ? error : "拿取製程項目清單錯誤，請稍後再試。"
        })
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