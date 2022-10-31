<template>
  <div class="m-3 pb-3">
    <h1 class="text-white">{{ initialPartNumber.name ? '修改部品' : '新增部品' }}</h1>
    <form @submit.stop.prevent="handleSubmit">

      <div class="form-group">
        <label for="exampleFormControlSelect1">発注人<span class="text-danger ml-1" style="font-size: 10px;">(必填)</span></label>
        <select v-model="belongsToCutomerId" class="form-control" name="customer" id="customer">
          <option v-for="customer in customers" :key="customer.id" :value="customer.id">{{ customer.name }}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="name">{{ subPartNumberCheck ? '子部品番號' : '部品番號' }}<span class="text-danger ml-1" style="font-size: 10px;">(必填)</span><input v-model="subPartNumberCheck" class="ml-5 sub-part-check-box" type="checkbox" name="" id="subPartNumberCheck"> <label for="subPartNumberCheck" class="sub-part-check-box-label">子部品</label></label>
        <input v-model="newPartNumberData.name" type="text" class="form-control" name="name" id="name" placeholder="">
      </div>


      <div v-if="subPartNumberCheck" class="form-group border border-warning rounded p-2" style="background-color:midnightblue;">
        <div class="row">
          <div class="col">
            <label for="">母部品<span class="text-danger ml-1" style="font-size: 10px;">(必填)</span></label>
            <div class="input-group input-group-sm p-0">
              <select v-model="newPartNumberData.affiliatedPartNumber" list="partnumberList" type="text" class="custom-select" name="affiliatedPartNumber" id="affiliatedPartNumber" placeholder="番號" value="">
                <option v-for="partNumber in partNumbersList" :key="partNumber.id" :value="partNumber.id">{{ partNumber.name }}</option>
              </select>
            </div>
          </div>
          <div class="col">
            <label for="">每單位使用量<span class="text-danger ml-1" style="font-size: 10px;">(必填)</span></label>
            <div class="input-group input-group-sm p-0">
              <input v-model="newPartNumberData.usagePerUnit" type="number" class="form-control" name="usagePerUnit" id="usagePerUnit" value="1" min="1">
            </div>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="unitPrice">單價</label>
        <input v-model="newPartNumberData.unitPrice" type="number" class="form-control" name="unitPrice" id="unitPrice" min="0" step="0.01">
      </div>
      <div class="form-group">
        <label for="inputCity">初設數量</label>
        <input v-model="newPartNumberData.quantity" type="number" class="form-control" name="quantity" id="quantity" min="0">
      </div>
      <div class="form-group">
        <label for="inputCity">安全數量設定</label>
        <input v-model="newPartNumberData.safetyStockQuantity" type="number" class="form-control" name="safetyStockQuantity" id="safetyStockQuantity" min="0">
      </div>
      <div class="form-group">
        <label for="inputCity">備註</label>
        <input v-model="newPartNumberData.commonName" type="text" class="form-control" name="commonName" id="commonName">
      </div>
      <div class="d-flex justify-content-end">
        <button type="submit" class="btn btn-primary mt-3">送出</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ToastBase, ToastBottom, ToastWarningCenter } from '../utils/helpers'
import managersAPI from '../apis/managers';
export default {
  props: {
    initialPartNumber: {
      type: Object,
      default: () => ({
        affiliatedPartNumber: '',
        name: '',
        usagePerUnit: 1,
        unitPrice: 0,
        quantity: 0,
        safetyStockQuantity: 0,
        commonName: ''
      })
    },
  },
  created() {
    this.fetchPartNumbers()
    this.fetchCustomers()
  },
  data() {
    return {
      belongsToCutomerId: '',
      customers: [],
      newPartNumberData: {
        affiliatedPartNumber: '',
        name: '',
        usagePerUnit: 1,
        unitPrice: 0,
        quantity: 0,
        safetyStockQuantity: 0,
        commonName: ''
      },
      partNumbers: [],
      partNumbersList: [],
      subPartNumberCheck: false,
    }
  },
  methods: {
    async fetchPartNumbers() {
      try {
        const { data, statusText } = await managersAPI.partNumbers.get()
        if (statusText !== 'OK') { throw new Error() }
        const { partNumbers } = data
        this.partNumbers = partNumbers
        this.partNumbersList = { ...partNumbers }
      } catch (error) {
        ToastBottom.fire({
          icon: 'error',
          title: '載入錯誤，請稍後在試!!'
        })
        console.log(error)
      }
    },
    async fetchCustomers() {
      try {
        const { data, statusText } = await managersAPI.customers.get()
        if (statusText !== 'OK') { throw new Error() }
        const { customers } = data
        this.customers = customers
      } catch (error) {
        ToastBottom.fire({
          icon: 'error',
          title: '載入錯誤，請稍後在試!!'
        })
      }
    },
    fetchInitialPartNumber(newValue) {
      this.belongsToCutomerId = newValue.customerId
      this.newPartNumberData.name = newValue.name
      this.newPartNumberData.affiliatedPartNumber = newValue.PartNumberId
      this.newPartNumberData.usagePerUnit = newValue.usagePerUnit
      this.newPartNumberData.unitPrice = newValue.unitPrice
      this.newPartNumberData.quantity = newValue.quantity
      this.newPartNumberData.safetyStockQuantity = newValue.safetyStockQuantity
      this.newPartNumberData.commonName = newValue.commonName
      this.subPartNumberCheck = newValue.isSubPartNumber
    },
    filterPartNumbersDataList(customerId) {
      this.partNumbersList = this.partNumbers.filter(partNumber => partNumber.CustomerId === customerId)
      this.partNumbersList = this.partNumbersList.filter(partNumber => partNumber.name !== this.newPartNumberData.name)
    },
    handleSubmit(e) {
      // 檢查資料完整性
      if (!this.belongsToCutomerId || !this.newPartNumberData.name) {
        ToastBase.fire({
          icon: 'warning',
          title: '必填項目請填寫完整'
        })
        return
      }
      if ((this.subPartNumberCheck && !this.newPartNumberData.affiliatedPartNumber) || (this.subPartNumberCheck && !this.newPartNumberData.usagePerUnit)) {
        ToastBase.fire({
          icon: 'warning',
          title: '必填項目請填寫完整'
        })
        return
      }
      const isRepeat = this.partNumbersList.filter(partNumber => partNumber.name == this.newPartNumberData.name)
      if (isRepeat.length) {
        ToastWarningCenter.fire(
          '錯誤!',
          '子部品與母部品名稱重複',
        )
        return
      }
      //
      const form = e.target
      const formData = new FormData(form)
      this.$emit('after-submit', formData)
    }
  },
  watch: {
    belongsToCutomerId(newValue) {
      this.filterPartNumbersDataList(newValue)
    },
    subPartNumberCheck() {
      this.filterPartNumbersDataList(this.belongsToCutomerId)
    },
    initialPartNumber(newValue) {
      this.fetchInitialPartNumber(newValue)
    }
  },
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