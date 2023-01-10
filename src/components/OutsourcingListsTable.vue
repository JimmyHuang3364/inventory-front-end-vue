<template>
  <div v-show="!isLoading" class="histories_area">
    <table class="table table-sm table-dark table-striped table-hover">
      <thead>
        <tr class="table-active" style="text-align: center;">
          <th scope="col">
            <h4>發包日</h4>
          </th>
          <th scope="col">
            <h4>品番</h4>
          </th>
          <th scope="col">
            <h4>廠商</h4>
          </th>
          <th scope="col">
            <h4>製程</h4>
          </th>
          <th scope="col">
            <h4>數量</h4>
          </th>
          <th scope="col">
            <h4>備註</h4>
          </th>
        </tr>
      </thead>

      <tbody>

        <tr v-for="outsourcinglist in outsourcinglists" :key="outsourcinglist.id" style="text-align: center;">
          <!--日期-->
          <th scope="row">{{ outsourcinglist.actionDate }}</th>
          <!--品番-->
          <td>{{ outsourcinglist.PartNumber.name ? outsourcinglist.PartNumber.name : outsourcinglist.SubPartNumber.name }}</td>
          <!--廠商-->
          <td>{{ outsourcinglist.PartnerFactory.name }}</td>
          <!--製程-->
          <td>{{ outsourcinglist.ProductionProcessItem.processname }}</td>
          <!--數量-->
          <td>{{ outsourcinglist.quantity }}</td>
          <!--備註-->
          <td>{{ outsourcinglist.note }}</td>
        </tr>

      </tbody>

    </table>
  </div>
</template>

<script>
export default {
  props: {
    initialOutsourcingLists: {
      type: Array
    }
  },
  created() {
    this.fetchInitialOutsourcingLists(this.initialOutsourcingLists);
  },
  data() {
    return {
      outsourcinglists: [],
      isLoading: true
    }
  },
  methods: {
    fetchInitialOutsourcingLists(newValue) {
      this.outsourcinglists = newValue
    }
  },
}
</script>