<template>
  <div class="view bg-dark p-3">
    <div class="bg-dark mb-3 px-3">
      <div class="d-flex justify-content-between align-items-center">
        <h1 class="text-white">新增</h1>
        <div>
          <button @click.stop.prevent="addNewItem('warehousing')" class="btn btn-outline-warning mr-4">入庫</button>
          <button @click.stop.prevent="addNewItem('shipping')" class="btn btn-outline-success mr-4">出庫</button>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-3">
          <label class="add-form-label" for="inputDate">日期</label>
          <input v-model="newItem.date" type="date" class="form-control" id="inputDate">
        </div>
        <div class="form-group col-md-3">
          <label class="add-form-label" for="inputNmae">品番號</label>
          <input v-model="newItem.name" type="text" class="form-control" id="inputName">
        </div>
        <div class="form-group col-md-3">
          <label class="add-form-label" for="inputQuantity">數量</label>
          <input v-model="newItem.quantity" type="number" class="form-control" id="inputQuantity" min="0">
        </div>
        <div class="form-group col-md-3">
          <label class="add-form-label" for="inputDescription">備註</label>
          <input v-model="newItem.description" type="text" class="form-control" id="inputDescription" placeholder="可空白...">
        </div>
      </div>
    </div>

    <div>
      <div v-show="warehousingList.length > 0" class="mt-5">
        <h1 class="text-dark bg-warning m-0">入庫</h1>
        <table class="table table-hover table-striped table-dark">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">#</th>
              <th scope="col">日期</th>
              <th scope="col">品番</th>
              <th scope="col">數量</th>
              <th scope="col">備註</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in warehousingList" :key="index">
              <td style="width: 1%;">
                <button @click.stop.prevent="removeItem('warehousingList', index)" class="btn btn-outline-danger btn-sm rounded-circle">
                  X
                </button>
              </td>
              <th style="width: 1%;" scope="row">{{index + 1}}</th>
              <td style="width: 10%;">{{item.date}}</td>
              <td style="width: 15%;">{{item.name}}</td>
              <td style="width: 10%;">{{item.quantity}}</td>
              <td>{{item.description}}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-show="shipmentList.length > 0" class="mt-5">
        <h1 class="text-white bg-success m-0">出庫</h1>
        <table class="table table-hover table-striped table-dark">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">#</th>
              <th scope="col">日期</th>
              <th scope="col">品番</th>
              <th scope="col">數量</th>
              <th scope="col">備註</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in shipmentList" :key="index">
              <td style="width: 1%;">
                <button @click.stop.prevent="removeItem('shipmentList', index)" class="btn btn-outline-danger btn-sm rounded-circle">
                  X
                </button>
              </td>
              <th style="width: 1%;" scope="row">{{index + 1}}</th>
              <td style="width: 10%;">{{item.date}}</td>
              <td style="width: 15%;">{{item.name}}</td>
              <td style="width: 10%;">{{item.quantity}}</td>
              <td>{{item.description}}</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
    <div v-if="shipmentList.length > 0 || warehousingList.length > 0" class="d-flex justify-content-end">
      <button type="submit" class="btn btn-primary">送出</button>
    </div>
  </div>


</template>

<script>
import { ToastBase } from '../utils/helpers'

export default {
  name: 'ShippingWarehousing',
  created() {
    this.fetchTodaysDate();
  },
  data() {
    return {
      newItem: {
        date: '',
        name: '',
        quantity: '',
        description: ''
      },
      shipmentList: [],
      warehousingList: []
    }
  },
  methods: {
    fetchTodaysDate() {
      let thisYear = (new Date().getFullYear()).toString()
      let thisMonth = ''
      let thisDate = ''

      if (new Date().getMonth() < 9) { thisMonth = `0${(new Date().getMonth() + 1).toString()}` } else { thisMonth = (new Date().getMonth() + 1).toString() }
      if (new Date().getDate() < 10) { thisDate = `0${new Date().getDate().toString()}` } else { thisDate = new Date().getDate().toString() }

      const todaysDate = `${thisYear}-${thisMonth}-${thisDate}`
      this.newItem.date = todaysDate
    },
    async addNewItem(action) {
      try {
        const { date, name, quantity, description } = this.newItem
        if (!date || !name || !quantity) {
          ToastBase.fire({
            icon: 'warning',
            title: '日、品番號、數量不可空白'
          })
          return
        }
        if (action === 'warehousing') {
          this.warehousingList.push({
            date,
            name,
            quantity,
            description
          })
          this.newItem.name = ''
          this.newItem.quantity = ''
          this.newItem.description = ''
          return
        }

        if (action === 'shipping') {
          this.shipmentList.push({
            date,
            name,
            quantity,
            description
          })
          this.newItem.name = ''
          this.newItem.quantity = ''
          this.newItem.description = ''
          return
        }
      } catch (error) {
        ToastBase.fire({
          icon: 'error',
          title: '發生錯誤'
        })
      }
    },
    async removeItem(list, index) {
      try {

        if (list === 'warehousingList') {
          this.warehousingList.splice(index, 1)
          return
        }

        if (list === 'shipmentList') {
          this.shipmentList.splice(index, 1)
          return
        }

      } catch (error) {
        // console.log(error)
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