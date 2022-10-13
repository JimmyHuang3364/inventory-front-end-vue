<template>
  <div class="mt-3">
    <form class="d-flex justify-content-center" action="/warehouse/partnumbers/search/?_method=GET" method="post">
      <div class="form-row">
        <div class="col-auto">
          <p class="text-light m-0">品番</p>
          <input list="partnumberList" type="text" class="form-control" name="searchText" id="searchText" placeholder="搜尋番號" value="">
          <datalist id="partnumberList">
          </datalist>
        </div>
        <div class="col-auto">
          <p class="text-light m-0">開始</p>
          <input type="date" class="form-control" name="startDate" id="startDate" value="">
        </div>
        <div class="col-auto">
          <p class="text-light m-0">結束</p>
          <input type="date" class="form-control" name="endDate" id="endDate" value="">
        </div>
        <div class="col-auto align-self-end">
          <button type="submit" class="btn btn-primary">搜尋</button>
        </div>
      </div>
    </form>

    <div class="d-flex flex-row justify-content-around align-items-center mt-3">
      <div class="mb-2">
        <router-link class="btn btn-outline-secondary mr-1" to="/warehouse/partnumbers" role="button">全部</router-link>
        <router-link v-for="customer in customers" :key="customer.id" class="btn btn-outline-secondary mx-1" :to="{ name: 'warehouse-part-numbers', query: {customerId: customer.id}}" role="button">
          {{ customer.name }}
        </router-link>
      </div>

      <div class="mb-2">
        <a class="btn btn-warning mr-2" href="#" role="button">新增入庫</a>
        <a class="btn btn-success" href="#" role="button">新增出庫</a>
      </div>
    </div>

    <section class="d-flex justify-content-around">
      <div style="flex-basis: 45%;">
        <PartnumberTable :initialPartNumbers="partNumbers" />
      </div>

      <div class="mb-3" style="flex-basis: 50%;">
        <h5 class="text-light">歷史紀錄</h5>
        <WarehousingHistoriesTable :initial_WarehousingHistories="warehousingHistories" />
      </div>
    </section>

  </div>
</template>

<script>
import { ToastBottom } from '../utils/helpers'
import partNumbersAPI from '../apis/part_numbers'
import PartnumberTable from '../components/PartnumberTable.vue'
import WarehousingHistoriesTable from '../components/WarehousingHistoriesTable.vue'
export default {
  name: 'PartNumbers',
  components: { PartnumberTable, WarehousingHistoriesTable },
  beforeRouteUpdate(to, from, next) {
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
      warehousingHistories: []
    };
  },

  methods: {
    async fetchPartNumbers({ queryCategoryId }) {
      try {
        const response = await partNumbersAPI.getPartNumbers({ customerId: queryCategoryId });
        const { data, statusText } = response;
        const { partNumbers, customers, warehousingHistories } = data;
        if (statusText !== "OK") {
          throw new Error();
        }
        this.partNumbers = partNumbers;
        this.customers = customers;
        this.warehousingHistories = warehousingHistories;
      }
      catch (error) {
        ToastBottom.fire({
          icon: "error",
          title: "載入錯誤，請稍後再試。"
        });
        console.log(error);
      }
    }
  },
}
</script>

<style scoped>
@media (max-width: 1200px) {
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