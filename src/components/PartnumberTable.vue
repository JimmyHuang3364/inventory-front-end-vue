<template>
  <div class="partnumbers_area">
    <table class="table table-sm table-hover table-bordered table-dark">
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

      <tbody v-for="partNumber in initialPartNumbers" :key="partNumber.id" style="border-top-width: 20px; border-color: rgb(19, 19, 19);">

        <tr v-if="partNumber.PartNumberId" style="background-color: #b0b0b0; text-align: center;">
          <!--品番-->
          <td class="text-dark" scope="row">{{partNumber.name}}</td>
          <!--在庫數量-->
          <td class="text-dark">{{partNumber.quantity}}</td>
          <!--備註-->
          <td class="text-dark">{{partNumber.commentName}}</td>
          <!--安全庫存-->
          <td class="text-dark">{{partNumber.safetyStockQuantity}}</td>
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

<style scoped>

</style>