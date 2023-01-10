<template>
  <div class="mt-3">
    <div v-if="isLoading">
      <Loader />
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

      <div class="d-flex flex-row justify-content-around align-items-center mt-3">
        <div class="mb-2">
          <router-link class="btn btn-outline-secondary mr-1" :to="{ name: 'warehouse-home' }" role="button">全部</router-link>
          <router-link v-for="customer in customers" :key="customer.id" class="btn btn-outline-secondary mx-1" :to="{ name: 'warehouse-home', query: { customerId: customer.id } }" role="button">
            {{ customer.name }}
          </router-link>
        </div>
      </div>

      <section class="d-flex justify-content-around">
        <div style="flex-basis: 45%;">
          <PartnumberTable :initialPartNumbers="partNumbers" />
        </div>

        <div class="mb-3" style="flex-basis: 50%;">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="btn-group btn-group-toggle" data-toggle="buttons">
              <label class="btn btn-outline-light active">
                <input @click="handleShowWarehousingHistoriesTable" type="radio" name="options" id="option1" checked> 出入庫紀錄
              </label>
              <label class="btn btn-outline-light">
                <input @click="handleShowOutsourcingListsTable" type="radio" name="options" id="option3"> 外包清單
              </label>
            </div>
            <div>
              <router-link v-show="!showOutsourcingListsTable" :to="{ name: 'warehouse-ShippingWarehousing' }" class="btn btn-info mr-2" role="button">新增出入庫</router-link>
              <router-link v-show="showOutsourcingListsTable" :to="{ name: 'warehouse-ShippingWarehousing' }" class="btn btn-primary mr-2" role="button">新增外包</router-link>
            </div>
          </div>
          <WarehousingHistoriesTable v-show="!showOutsourcingListsTable" :initial-warehousing-histories="warehousingHistories" />
          <OutsourcingListsTable v-show="showOutsourcingListsTable" :initial-outsourcing-lists="outsourcinglists" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { ToastBottom } from '../utils/helpers'
import partNumbersAPI from '../apis/part_numbers'
import warehouseAPI from '../apis/warehouse'
import PartnumberTable from '../components/PartnumberTable.vue'
import WarehousingHistoriesTable from '../components/WarehousingHistoriesTable.vue'
import OutsourcingListsTable from '../components/OutsourcingListsTable.vue'
import Loader from '../components/Loader.vue'
export default {
  name: 'Home',
  components: { PartnumberTable, WarehousingHistoriesTable, OutsourcingListsTable, Loader },
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
    this.fetchOutsourcingLists()
  },
  data() {
    return {
      partNumbers: [],
      customers: [],
      warehousingHistories: [],
      outsourcinglists: [],
      searchText: '',
      startDate: '',
      endDate: '',
      isLoading: true,
      showOutsourcingListsTable: false
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
    async fetchOutsourcingLists() {
      try {
        const response = await warehouseAPI.outsourcinglist.get()
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
          title: error ? error : "載入錯誤，請稍後再試。"
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
    handleShowOutsourcingListsTable() {
      this.showOutsourcingListsTable = true
    },
    handleShowWarehousingHistoriesTable() {
      this.showOutsourcingListsTable = false
    }
  },
}
</script>

<style scoped>
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