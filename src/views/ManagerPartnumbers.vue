<template>
  <div class="m-5">

    <form class="d-flex justify-content-center" action="#" method="post">
      <div class="form-row">
        <div class="col-auto">
          <p class="text-light m-0">品番</p>
          <input v-model="searchText" list="partnumberList" type="text" class="form-control" name="searchText" id="searchText" placeholder="搜尋番號" value="">
          <datalist id="partnumberList">
          </datalist>
        </div>
        <div class="col-auto align-self-end">
          <router-link :to="{name: 'manager-part-numbers', query: {searchText: searchText}}" class="btn btn-primary" role="button">搜尋</router-link>
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
        <router-link :to="{name: 'manager-part-numbers-new'}" class="btn btn-warning mb-2" role="button" style="margin-left: 60.994px;">+ 新增部品</router-link>
      </div>
    </div>

    <div class="mt-2">
      <table class="table table-hover table-bordered table-dark">
        <thead>
          <tr class="table-active" style="text-align: center;">
            <th scope="col">
              <h4>品番</h4>
            </th>
            <th scope="col">
              <h4>在庫數量</h4>
            </th>
            <th scope="col">
              <h4>備註</h4>
            </th>
            <th scope="col">
              <h4>安全庫存</h4>
            </th>
            <th scope="col">
              <h4>操作</h4>
            </th>
          </tr>
        </thead>

        <tbody v-for="partNumber in partNumbers" :key="partNumber.id" style="border-top-width: 20px; border-color: rgb(19, 19, 19);">

          <tr v-if="partNumber.PartNumberId" style="background-color: #b0b0b0; text-align: center;">
            <!--品番-->
            <td class="text-dark" scope="row">{{partNumber.name}}</td>
            <!--在庫數量-->
            <td class="text-dark">{{partNumber.quantity}}</td>
            <!--備註-->
            <td class="text-dark">{{partNumber.commentName}}</td>
            <!--安全庫存-->
            <td class="text-dark">{{partNumber.safetyStockQuantity}}</td>
            <td class="py-1 align-middle">
              <button class="btn btn-warning btn-sm mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                </svg>
              </button>
              <button class="btn btn-outline-danger btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                </svg>
              </button>
            </td>
          </tr>

          <tr v-else style="background-color: #182f8b; text-align: center;">
            <!--品番-->
            <td scope="row">{{partNumber.name}}</td>
            <!--在庫數量-->
            <td>{{partNumber.quantity}}</td>
            <!--備註-->
            <td>{{partNumber.commentName}}</td>
            <!--安全庫存-->
            <td>{{partNumber.safetyStockQuantity}}</td>
            <td class="py-1 align-middle">
              <button class="btn btn-warning btn-sm mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                </svg>
              </button>
              <button class="btn btn-outline-danger btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                </svg>
              </button>
            </td>
          </tr>

          <tr v-for="subPartNumber in partNumber.subPartNumbers" :key="subPartNumber.id" style="text-align: center; background-color:#b0b0b0;">
            <!--品番-->
            <td class="text-dark" scope="row">{{subPartNumber.name}}</td>
            <!--在庫數量-->
            <td class="text-dark">{{subPartNumber.quantity}}</td>
            <!--備註-->
            <td class="text-dark">{{subPartNumber.commentName}}</td>
            <!--安全庫存-->
            <td class="text-dark">{{subPartNumber.safetyStockQuantity}}</td>
            <td class="py-1 align-middle">
              <button class="btn btn-warning btn-sm mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                </svg>
              </button>
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
  name: 'ManagerPartnumbers',
  components: {},
  beforeRouteUpdate(to, from, next) {
    if (to.query.searchText) {
      const queryContent = {
        searchText: to.query.searchText,
      }
      this.fetchSearchPartNumbers(queryContent)
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
      searchText: ''
    };
  },

  methods: {
    async fetchPartNumbers({ queryCategoryId }) {
      try {
        const response = await managersAPI.partNumbers.get({ customerId: queryCategoryId });
        const { data, statusText } = response;
        const { partNumbers, customers } = data;
        if (statusText !== "OK") {
          throw new Error();
        }
        this.partNumbers = partNumbers;
        this.customers = customers;
      }
      catch (error) {
        ToastBottom.fire({
          icon: "error",
          title: "載入錯誤，請稍後再試。"
        });
        console.log(error);
      }
    },
    async fetchSearchPartNumbers(queryContent) {
      try {
        // console.log(queryContent)
        const { data, statusText } = await managersAPI.partNumbers.getSearch(queryContent)
        if (statusText !== "OK") {
          throw new Error();
        }
        const { partNumbers, customers } = data;
        console.log(partNumbers.PartNumberId)
        this.partNumbers = partNumbers;
        this.customers = customers;
      } catch (error) {
        ToastBottom.fire({
          icon: "error",
          title: "載入錯誤，請稍後再試。"
        });
        console.log(error)
      }
    }
  },
}
</script>

<style scoped>

</style>