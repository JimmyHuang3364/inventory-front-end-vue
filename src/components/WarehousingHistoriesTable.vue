<template>
  <div class="histories_area">
    <table class="table table-sm table-dark table-striped table-hover">
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
        </tr>
      </thead>

      <tbody>

        <tr v-for="WarehousingHistory in initial_WarehousingHistories" :key="WarehousingHistory.id" style="text-align: center;">
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
          <td></td>
          <!--備註-->
          <td></td>
        </tr>

      </tbody>

    </table>
  </div>
</template>

<script>
export default {
  props: {
    initial_WarehousingHistories: {
      type: Array,
    },
  },
}
</script>
