<template>
  <div class="mt-3">
    <div v-if="isLoading">
      <PageLoader />
    </div>

    <div v-if="!isLoading">
      <form class="d-flex justify-content-center">
        <div class="form-row">
          <div class="col-auto">
            <p class="text-light m-0">品番</p>
            <input v-model="searchText" list="partnumberList" type="text" class="form-control" name="searchText" id="searchText" placeholder="搜尋番號" value="">
            <datalist id="partnumberList">
            </datalist>
          </div>
          <div class="col-auto">
            <p class="text-light m-0">開始</p>
            <input v-model="startDate" type="date" class="form-control" name="startDate" id="startDate" value="">
          </div>
          <div class="col-auto">
            <p class="text-light m-0">結束</p>
            <input v-model="endDate" type="date" class="form-control" name="endDate" id="endDate" value="">
          </div>
          <div class="col-auto align-self-end">
            <button class="t-bg-blue-500 t-text-white t-rounded t-h-[38px] t-w-[50px]"  @click="handleSearchPartNumbers">搜尋</button>
          </div>
        </div>
      </form>

      <div class="t-mx-2 t-my-4">
          <Swiper :slides-per-view="'auto'" :space-between="5" :watch-overflow="true">
            <SwiperSlide class="!t-w-auto">
              <div class="t-customer-btn" :class="{'t-active': !queryCategoryId || queryCategoryId === ''}" role="button" @click="func_fetchPartNumbers('', e)">
                全部
            </div>
          </SwiperSlide>
          <template v-for="customer in customers" :key="customer.id">
            <SwiperSlide class="!t-w-auto">
              <div class="t-customer-btn" :class="{'t-active': queryCategoryId === customer.id}" role="button" @click="func_fetchPartNumbers(customer.id)">
                {{ customer.name }}
              </div>
            </SwiperSlide>
          </template>
        </Swiper>
      </div>
      
      <section class="d-flex justify-content-around">
        <div style="flex-basis: 45%;">
          <PartnumberTable :initialPartNumbers="partNumbers" />
        </div>

        <div class="mb-3" style="flex-basis: 50%;">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="btn-group btn-group-toggle" data-toggle="buttons">
              <label class="btn btn-outline-light" :class="{'active': !showOutsourcingListsTable}">
                <input @click="() => showOutsourcingListsTable = false" type="radio" name="options" id="option1"> 出入庫紀錄
              </label>
              <label class="btn btn-outline-light" :class="{'active': showOutsourcingListsTable}">
                <input @click="() => showOutsourcingListsTable = true" type="radio" name="options" id="option3"> 外包清單
              </label>
            </div>
            <div>
              <div v-show="!showOutsourcingListsTable">
                <button v-show="!isShowFastShippingWarehousingFormArea" @click="() => isShowFastShippingWarehousingFormArea = true" class="btn btn-outline-warning mr-2">快速新增</button>
                <router-link :to="{ name: 'warehouse-ShippingWarehousing' }" class="btn btn-info" role="button">新增出入庫</router-link>
              </div>

              <div v-show="showOutsourcingListsTable">
                <button v-show="!isShowFastOutsourcingFormArea" @click="() => isShowFastOutsourcingFormArea  = true" class="btn btn-outline-warning mr-2">快速新增</button>
                <router-link :to="{ name: 'warehouse-outsourcing-new' }" class="btn btn-primary" role="button">新增外包</router-link>
              </div>
            </div>
          </div>
          <WarehousingHistoriesTable @after-click-toggle-fast-form-area="() => isShowFastShippingWarehousingFormArea = false" v-show="!showOutsourcingListsTable" :initial-warehousing-histories="warehousingHistories" :initial-part-numbers="partNumbers" :initial-is-show-fast-shipping-warehousing-form-area="isShowFastShippingWarehousingFormArea" />
          <OutsourcingListsTable @outsourcing-delete="func_afterOutsourcingDoneToUpdateQuantity" @outsourcing-is-done-to-submit="func_afterOutsourcingDoneToUpdateQuantity" @after-submited-new="func_afterSubmitedNew" @after-click-toggle-fast-form-area="() => isShowFastOutsourcingFormArea = false" v-show="showOutsourcingListsTable" :initial-is-show-fast-outsourcing-form-area="isShowFastOutsourcingFormArea" :initial-part-numbers="partNumbers" />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import { ToastBottom } from '../utils/helpers'
import partNumbersAPI from '../apis/part_numbers'
// import { useRouter } from 'vue-router'
// 組件引入
import PartnumberTable from '../components/PartnumberTable.vue'
import WarehousingHistoriesTable from '../components/WarehousingHistoriesTable.vue'
import OutsourcingListsTable from '../components/OutsourcingListsTable.vue'
import PageLoader from '../components/PageLoader.vue'

// const router = useRouter()
const partNumbers = ref([])
const customers = ref([])
const warehousingHistories = ref([])
const searchText = ref('')
const startDate = ref('')
const endDate = ref('')
const isLoading = ref(true)
const showOutsourcingListsTable = ref(false)
const isShowFastShippingWarehousingFormArea = ref(false)
const isShowFastOutsourcingFormArea = ref(false)
const queryCategoryId = ref(null)

const func_fetchPartNumbers = async (_customerId) => {
  try {
    if (queryCategoryId.value === _customerId) return
    queryCategoryId.value = _customerId
    isLoading.value = true
    const response = await partNumbersAPI.getPartNumbers({ customerId: _customerId });
    const { data, status, statusText } = response;
    const { partNumbers: _partNumbers, customers: _customers, warehousingHistories: _warehousingHistories } = data;
    if (statusText!== "OK" && status!== 200) {
      throw new Error();
    }
    partNumbers.value = _partNumbers
    customers.value = _customers
    warehousingHistories.value = _warehousingHistories
    searchText.value = ''
    startDate.value = ''
    endDate.value = ''
    isLoading.value = false
  } catch (error) {
    ToastBottom.fire({
      icon: "error",
      title: "載入錯誤，請稍後再試。"
    });
    isLoading.value = false
  }
}

//更新partNumbers數量，更新出入庫紀錄
const func_afterOutsourcingDoneToUpdateQuantity = (_outsourcingData, _warehousingHistory) => {
  //呼叫更新出入庫紀錄
  func_warehousingHistoryUpdate(_warehousingHistory)
  for (let partNumber of partNumbers.value) {
    if (partNumber.name === _outsourcingData.partNumberName) {
      partNumber.quantity = partNumber.quantity + Number(_outsourcingData.quantity)
      return
    } else {
      for (let subPartNumber of partNumber.subPartNumbers) {
        if (subPartNumber.name === _outsourcingData.partNumberName) {
          subPartNumber.quantity = subPartNumber.quantity + Number(_outsourcingData.quantity)
          return
        }
      }
    }
  }
}

// 更新出入庫紀錄
const func_warehousingHistoryUpdate = (_warehousingHistory) => {
  if (!_warehousingHistory) return
  // 更新出入庫版面
  warehousingHistories.value.unshift({
    PartNumber: { name: _warehousingHistory.partNumberName },
    note: _warehousingHistory.note,
    quntityOfShipping: null,
    quntityOfWarehousing: _warehousingHistory.quntityOfWarehousing,
    textCreatedAt: `${new Date(_warehousingHistory.updatedAt).getFullYear()}/${new Date(_warehousingHistory.updatedAt).getMonth() + 1}/${new Date(_warehousingHistory.updatedAt).getDate()}`,
    totalQuntity: _warehousingHistory.totalQuntity,
  })
  warehousingHistories.value.pop()
}

const func_afterSubmitedNew = (_partNumber, _warehousingHistory, _actionDate) => {
  let left = -1, right = partNumbers.value.length
  while (left + 1!== right) {
    let mid = Math.floor((left + right) / 2)
    if (partNumbers.value[mid].name === _partNumber.name) {
      partNumbers.value[mid].quantity = _partNumber.quantity
      break
    } else if (partNumbers.value[mid].name < _partNumber.name) {
      left = mid
    } else {
      right = mid
    }
  }
  // 更新出入庫版面
  warehousingHistories.value.unshift({
    PartNumber: { name: _partNumber.name },
    note: _warehousingHistory.note,
    quntityOfShipping: _warehousingHistory.quntityOfShipping,
    quntityOfWarehousing: null,
    textCreatedAt: `${new Date(_actionDate).getFullYear()}/${new Date(_actionDate).getMonth() + 1}/${new Date(_actionDate).getDate()}`,
    totalQuntity: _warehousingHistory.totalQuntity,
  })
  warehousingHistories.value.pop()
}

const handleSearchPartNumbers = async () => {
  try {
    const _queryContent = {
      searchText: searchText.value,
      startDate: startDate.value,
      endDate: endDate.value,
    }
    isLoading.value = true
    const { data, status, statusText } = await partNumbersAPI.getSearchPartNumbers(_queryContent)
    if (statusText!== "OK" && status!== 200) { throw new Error() }
    const { partNumbers: _partNumbers, warehousingHistories: _warehousingHistories } = data;
    partNumbers.value = _partNumbers
    warehousingHistories.value = _warehousingHistories
    isLoading.value = false
  } catch (error) {
    ToastBottom.fire({
      icon: "error",
      title: "載入錯誤，請稍後再試。"
    });
    isLoading.value = false
  }
}

onMounted(() => {
  func_fetchPartNumbers('')
})

</script>

<style scoped>
.customer-btn-container {
  margin: 0.5rem 0.5rem;
  .customer-btn {
    width: auto !important;
    padding: 2px;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 3px;
    &.active {
      background-color: #007bff;
      color: #fff;
    }
  }
}

@media (max-width: 640px) {
  section {
    flex-direction: column-reverse;
  }

  .partnumbers_area,
  .histories_area {
    background: #747474;
    overflow-y: scroll;
  }

  .histories_area {
    height: 150px;
  }

  .partnumbers_area {
    max-height: 550px;
  }
}
</style>