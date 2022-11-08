<template>
  <div class="m-5">
    <div v-if="isLoading">
      <Loader />
    </div>

    <div v-if="!isLoading">
      <div class="d-flex justify-content-end mr-3">
        <router-link :to="{ name: 'manager-customers-new' }" class="btn btn-primary btn-lg my-3">+発注人</router-link>
      </div>
      <table class="table table-hover table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">
              <h3>#</h3>
            </th>
            <th scope="col">
            </th>
            <th scope="col">
              <h3>名稱</h3>
            </th>
            <th scope="col">
              <h3>地址</h3>
            </th>
            <th scope="col">
              <h3>電話</h3>
            </th>
            <th scope="col">
              <h3>傳真</h3>
            </th>
            <th scope="col">
              <h3>操作</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="customer in customers" :key="customer.id">
            <td class="align-middle" scope="row">
              <h4>{{ customer.id }}</h4>
            </td>
            <th class="align-middle">
              <img :src="customer.img ? customer.img : 'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'" width="100px" height="100px" alt="...">
            </th>
            <td class="align-middle">
              <h4>{{ customer.name }}</h4>
            </td>
            <td class="align-middle">
              <h4>{{ customer.address }}</h4>
            </td>
            <td class="align-middle">
              <h4>{{ customer.tel }}</h4>
            </td>
            <td class="align-middle">
              <h4>{{ customer.fax }}</h4>
            </td>
            <td class="py-1 align-middle">
              <router-link :to="{ name: 'manager-customers-edit', params: { id: customer.id } }" class="btn btn-outline-warning btn-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                </svg>
              </router-link>

              <button @click="deleteCustomer(customer.id)" class="btn btn-outline-danger btn-lg">
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
import Loader from '../components/Loader.vue'
export default {
  name: "ManagerCustomers",
  components: { Loader },
  created() {
    this.fetchCustomers();
  },
  data() {
    return {
      customers: [],
      isLoading: true
    };
  },
  methods: {
    async fetchCustomers() {
      try {
        this.isLoading = true
        const { data, statusText } = await managersAPI.customers.get();
        if (statusText !== "OK") {
          throw new Error();
        }
        const { customers } = data;
        this.customers = customers;
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
    async deleteCustomer(customerId) {
      try {
        const { data, statusText } = await managersAPI.customers.delete(customerId);
        if (statusText !== "OK") {
          throw new Error();
        }
        this.customers = this.customers.filter(customer => customer.id !== customerId);
        ToastBottom.fire({
          icon: "success",
          title: data.message
        });
      }
      catch (error) {
        ToastBottom.fire({
          icon: "error",
          title: "錯誤!!請稍後在試!!"
        });
      }
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
