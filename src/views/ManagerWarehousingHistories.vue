<template>
  <div class="container mt-3">

    <form class="d-flex justify-content-center" action="#" method="post">
      <div class="form-row">
        <div class="col-auto">
          <p class="text-light m-0">品番</p>
          <input list="partnumberList" type="text" class="form-control" name="searchText" id="searchText" placeholder="搜尋番號" value="">
          <datalist id="partnumberList">
          </datalist>
        </div>
        <div class="col-auto align-self-end">
          <button type="submit" class="btn btn-primary">搜尋</button>
        </div>
      </div>
    </form>

    <div class="d-flex flex-row justify-content-between align-items-center">
      <div class="">
        <router-link class="btn btn-outline-secondary mr-1" :to="{name: 'manager-part-numbers'}" role="button">全部</router-link>
        <router-link v-for="customer in customers" :key="customer.id" class="btn btn-outline-secondary mx-1" :to="{ name: 'manager-part-numbers', query: {customerId: customer.id}}" role="button">
          {{ customer.name }}
        </router-link>
      </div>

      <div>
        <a class="btn btn-warning mb-2" href="#" role="button" style="margin-left: 60.994px;">+ 新增部品</a>
      </div>
    </div>

    <div class="mt-2">
      <table class="table table-hover table-bordered table-dark">
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
            <th scope="col">
              <h4>操作</h4>
            </th>
          </tr>
        </thead>

        <tbody>

          <tr v-for="WarehousingHistory in warehousingHistories" :key="WarehousingHistory.id" style="text-align: center;">
            <!--日期-->
            <th scope="row">{{WarehousingHistory.textCreatedAt}}</th>
            <!--品番-->
            <td>{{WarehousingHistory.PartNumber.name}}</td>
            <!--入庫-->

            <td v-if="WarehousingHistory.quntityOfWarehousing" class="text-dark" style="background-color: #ea9d06;">{{WarehousingHistory.quntityOfWarehousing}}</td>
            <td v-else>{{WarehousingHistory.quntityOfWarehousing}}</td>
            <!--出庫-->
            <td v-if="WarehousingHistory.quntityOfShipping" class="bg-success">{{WarehousingHistory.quntityOfShipping}}</td>
            <td v-else>{{WarehousingHistory.quntityOfShipping}}</td>
            <!--餘存-->
            <td>{{WarehousingHistory.totalQuntity}}</td>
            <!--備註-->
            <td>{{WarehousingHistory.note}}</td>
            <!--操作-->
            <td>
              <button class="btn btn-outline-danger btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                </svg>
              </button>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { ToastBottom } from '../utils/helpers'
import managersAPI from '../apis/managers'
export default {
  name: 'ManagerWarehousingHistories',
  components: {},
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
      warehousingHistories: [],
      customers: [],
    };
  },
  methods: {
    async fetchPartNumbers({ queryCategoryId }) {
      try {
        const response = await managersAPI.getWarehousingHistories({ customerId: queryCategoryId });
        const { data, statusText } = response;
        const { warehousingHistories, customers } = data;
        if (statusText !== "OK") {
          throw new Error();
        }
        this.warehousingHistories = warehousingHistories;
        this.customers = customers;
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

<style lang="scss" scoped>

</style>