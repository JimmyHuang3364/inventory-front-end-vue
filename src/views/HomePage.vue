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
            <router-link :to="{ name: 'warehouse-home', query: { searchText: searchText, startDate: startDate, endDate: endDate } }" class="btn btn-primary" role="button">搜尋</router-link>
          </div>
        </div>
      </form>

      <Swiper :slides-per-view="'auto'" :space-between="10" :watch-overflow="true" class="customer-btn-container">
        <Swiper-slide class="t-flex t-justify-center customer-btn">
          <router-link class="" :to="{ name: 'warehouse-home' }" role="button">全部</router-link>
        </Swiper-slide>
        <template v-for="customer in customers" :key="customer.id">
          <Swiper-slide class="t-flex t-justify-center customer-btn">
            <router-link :to="{ name: 'warehouse-home', query: { customerId: customer.id } }" role="button">
              {{ customer.name }}
            </router-link>
          </Swiper-slide>
        </template>
      </Swiper>

      <section class="d-flex justify-content-around">
        <div style="flex-basis: 45%;">
          <PartnumberTable :initialPartNumbers="partNumbers" />
        </div>

        <div class="mb-3" style="flex-basis: 50%;">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="btn-group btn-group-toggle" data-toggle="buttons">
              <label class="btn btn-outline-light active">
                <input @click="afterHandleShowWarehousingHistoriesTable" type="radio" name="options" id="option1" checked> 出入庫紀錄
              </label>
              <label class="btn btn-outline-light">
                <input @click="afterHandleShowOutsourcingListsTable" type="radio" name="options" id="option3"> 外包清單
              </label>
            </div>
            <div>
              <div v-show="!showOutsourcingListsTable">
                <button v-show="!isShowFastShippingWarehousingFormArea" @click="toggleShowFastShippingWarehousingFormArea" class="btn btn-outline-warning mr-2">快速新增</button>
                <router-link :to="{ name: 'warehouse-ShippingWarehousing' }" class="btn btn-info" role="button">新增出入庫</router-link>
              </div>

              <div v-show="showOutsourcingListsTable">
                <button v-show="!isShowFastOutsourcingFormArea" @click="toggleShowFastOutsourcingFormArea" class="btn btn-outline-warning mr-2">快速新增</button>
                <router-link :to="{ name: 'warehouse-outsourcing-new' }" class="btn btn-primary" role="button">新增外包</router-link>
              </div>
            </div>
          </div>
          <WarehousingHistoriesTable @after-click-toggle-fast-form-area="toggleShowFastShippingWarehousingFormArea" v-show="!showOutsourcingListsTable" :initial-warehousing-histories="warehousingHistories" :initial-part-numbers="partNumbers" :initial-is-show-fast-shipping-warehousing-form-area="isShowFastShippingWarehousingFormArea" />
          <OutsourcingListsTable @outsourcing-delete="afterOutsourcingDoneToUpdateQuantity" @outsourcing-is-done-to-submit="afterOutsourcingDoneToUpdateQuantity" @after-submited-new="after_submited_new" @after-click-toggle-fast-form-area="toggleShowFastOutsourcingFormArea" v-show="showOutsourcingListsTable" :initial-is-show-fast-outsourcing-form-area="isShowFastOutsourcingFormArea" :initial-part-numbers="partNumbers" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'

import { ToastBottom } from '../utils/helpers'
import partNumbersAPI from '../apis/part_numbers'
import PartnumberTable from '../components/PartnumberTable.vue'
import WarehousingHistoriesTable from '../components/WarehousingHistoriesTable.vue'
import OutsourcingListsTable from '../components/OutsourcingListsTable.vue'
import PageLoader from '../components/PageLoader.vue'
export default {
  name: 'HomePage',
  components: { PartnumberTable, WarehousingHistoriesTable, OutsourcingListsTable, PageLoader, Swiper, SwiperSlide },
  beforeRouteUpdate(to, from, next) {
    if (to.query.searchText || to.query.startDate || to.query.endDate) {
      const queryContent = {
        searchText: to.query.searchText,
        startDate: to.query.startDate,
        endDate: to.query.endDate
      }
      this.handleSearchartNumbers(queryContent)
      next();
      return
    }
    const { customerId = '' } = to.query
    this.fetchPartNumbers({ queryCategoryId: customerId })
    next();
  },
  created() {
    const { customerId = '' } = this.$route.query
    this.fetchPartNumbers({ queryCategoryId: customerId });
  },
  data() {
    return {
      partNumbers: [],
      customers: [],
      warehousingHistories: [],
      searchText: '',
      startDate: '',
      endDate: '',
      isLoading: true,
      showOutsourcingListsTable: false,
      isShowFastShippingWarehousingFormArea: false,
      isShowFastOutsourcingFormArea: false,
    };
  },

  methods: {
    async fetchPartNumbers({ queryCategoryId }) {
      try {
        this.isLoading = true
        const response = await partNumbersAPI.getPartNumbers({ customerId: queryCategoryId });
        const { data, status, statusText } = response;
        const { partNumbers, customers, warehousingHistories } = data;
        if (statusText !== "OK" && status !== 200) {
          throw new Error();
        }
        this.partNumbers = partNumbers;
        this.customers = customers;
        this.warehousingHistories = warehousingHistories;
        this.searchText = ''
        this.startDate = ''
        this.endDate = ''
        this.isLoading = false
      }
      catch (error) {
        ToastBottom.fire({
          icon: "error",
          title: "載入錯誤，請稍後再試。"
        });
        this.isLoading = false
      }
    },
    async handleSearchartNumbers(queryContent) {
      try {
        this.isLoading = true
        const { data, status, statusText } = await partNumbersAPI.getSearchPartNumbers(queryContent)
        if (statusText !== "OK" && status !== 200) { throw new Error() }
        const { partNumbers, warehousingHistories } = data;
        this.partNumbers = partNumbers;
        this.warehousingHistories = warehousingHistories;
        this.isLoading = false
      } catch (error) {
        ToastBottom.fire({
          icon: "error",
          title: "載入錯誤，請稍後再試。"
        });
        this.isLoading = false
      }
    },
    afterOutsourcingDoneToUpdateQuantity(outsourcingData, warehousingHistory) { //更新partNumbers數量，更新出入庫紀錄
      this.warehousingHistory_update(warehousingHistory) //呼叫更新出入庫紀錄
      for (let partNumber of this.partNumbers) {
        if (partNumber.name === outsourcingData.partNumberName) {
          partNumber.quantity = partNumber.quantity + Number(outsourcingData.quantity)
          return
        } else {
          for (let subPartNumber of partNumber.subPartNumbers) {
            if (subPartNumber.name === outsourcingData.partNumberName) {
              subPartNumber.quantity = subPartNumber.quantity + Number(outsourcingData.quantity)
              return
            }
          }
        }
      }
    },
    warehousingHistory_update(warehousingHistory) { // function---更新出入庫紀錄
      // 更新出入庫版面
      this.warehousingHistories.unshift({
        PartNumber: { name: warehousingHistory.partNumberName },
        note: warehousingHistory.note,
        quntityOfShipping: null,
        quntityOfWarehousing: warehousingHistory.quntityOfWarehousing,
        textCreatedAt: `${new Date(warehousingHistory.updatedAt).getFullYear()}/${new Date(warehousingHistory.updatedAt).getMonth() + 1}/${new Date(warehousingHistory.updatedAt).getDate()}`,
        totalQuntity: warehousingHistory.totalQuntity,
      })

      this.warehousingHistories.pop()
    },
    afterHandleShowOutsourcingListsTable() {
      this.showOutsourcingListsTable = true
    },
    afterHandleShowWarehousingHistoriesTable() {
      this.showOutsourcingListsTable = false
    },
    after_submited_new(partNumber, warehousingHistory, actionDate) {
      // console.log('收到更新數量通知')
      // console.log(partNumbers)
      let left = -1, right = this.partNumbers.length
      while (left + 1 !== right) {
        let mid = Math.floor((left + right) / 2)
        if (this.partNumbers[mid].name === partNumber.name) {
          this.partNumbers[mid].quantity = partNumber.quantity
          break
        } else if (this.partNumbers[mid].name < partNumber.name) {
          left = mid
        } else {
          right = mid
        }
      }

      // 更新出入庫版面
      this.warehousingHistories.unshift({
        PartNumber: { name: partNumber.name },
        note: warehousingHistory.note,
        quntityOfShipping: warehousingHistory.quntityOfShipping,
        quntityOfWarehousing: null,
        textCreatedAt: `${new Date(actionDate).getFullYear()}/${new Date(actionDate).getMonth() + 1}/${new Date(actionDate).getDate()}`,
        totalQuntity: warehousingHistory.totalQuntity,
      })

      this.warehousingHistories.pop()
    },
    toggleShowFastShippingWarehousingFormArea() {
      this.isShowFastShippingWarehousingFormArea = !this.isShowFastShippingWarehousingFormArea
    },
    toggleShowFastOutsourcingFormArea() {
      this.isShowFastOutsourcingFormArea = !this.isShowFastOutsourcingFormArea
    }
  },
}
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