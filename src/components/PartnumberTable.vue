<template>
  <div class="partnumbers_area">
    <table class="table table-sm table-striped table-hover table-bordered table-dark">
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
        </tr>
      </thead>

      <tbody v-for="partNumber in initialPartNumbers" :key="partNumber.id">

        <tr style="text-align: center;">
          <!--品番-->
          <th scope="row">{{partNumber.name}}</th>
          <!--在庫數量-->
          <td>{{partNumber.quantity}}</td>
          <!--備註-->
          <td>{{partNumber.commonName}}</td>
          <!--安全庫存-->
          <td>{{partNumber.safetyStockQuantity}}</td>
        </tr>

        <tr v-show="partNumber.subPartNumbers.length" v-for="subPartNumber in partNumber.subPartNumbers" :key="subPartNumber.id" style="text-align: center;">
          <!--品番-->
          <th class="py-1 text-info" scope="row">{{subPartNumber.name}}</th>
          <!--在庫數量-->
          <td class="py-1 bg-danger">{{subPartNumber.quantity}}</td>
          <!--備註-->
          <td class="py-1">{{subPartNumber.commonName}}</td>
          <!--安全庫存-->
          <td class="py-1">{{subPartNumber.safetyStockQuantity}}</td>
        </tr>

      </tbody>

    </table>
  </div>
</template>

<script>
export default {
  props: {
    initialPartNumbers: {
      type: Array,
    },
  },
}
</script>