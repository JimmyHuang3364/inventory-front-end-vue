<template>
  <div class="text-white m-5">
    <h1>模具內容細節記錄<span style="font-size: 0.8rem;"><router-link :to="{ name: 'manager-Stamping_Dies_New' }" class="btn btn-sm btn-transparent text-warning" role="button">修改</router-link></span></h1>
    <h4>機種：{{ stampingDie.model }}</h4>
    <h4>對應部品番：{{ stampingDie.correspondingParts }}</h4>
    <h4>固定資產：{{ stampingDie.type }}</h4>
    <h4>模具名：{{ stampingDie.name }}</h4>
    <h4>取得日期：{{ stampingDie.getDate }}</h4>
    <h4>取得金額：NT${{ stampingDie.purchasingPrice }}</h4>
    <h4>模具製造人：{{ stampingDie.creator }}</h4>
    <!--  -->
    <h4>壽命(目前/額度)： {{ stampingDie.totalUsage }} / {{ stampingDie.lifeSpan }}<span style="font-size: 0.8rem;"><button type="button" class="btn btn-sm btn-info ml-1" data-toggle="modal" data-target="#staticBackdrop">歷史紀錄</button></span>
      <!-- 歷史紀錄Modal -->
      <div class="modal fade" id="staticBackdrop" tabindex="-1" aria-labelledby="staticBackdrop" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content bg-transparent">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">使用紀錄</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span class="text-white" aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <table class="table table-striped table-dark">
                <thead>
                  <tr>
                    <th scope="col">日期</th>
                    <th scope="col">數量</th>
                    <th scope="col">備註</th>
                    <th scope="col">動作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="usageHistory in stampingDie.usageHistories" :key="usageHistory.id">
                    <td>{{ usageHistory.date }}</td>
                    <td>{{ usageHistory.amount }}</td>
                    <td>{{ usageHistory.note }}</td>
                    <td>
                      <button class="btn btn-sm btn-outline-warning mr-2">修改</button>
                      <button class="btn btn-sm btn-outline-danger">delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
    </h4>

    <h4>材質：{{ stampingDie.material }}</h4>
    <h4>重量：{{ stampingDie.weight }} kg</h4>
    <div>
      <h2>模具履歷 <span style="font-size: 0.8rem;">(新設、設計變更、更新、修理、報廢等...)</span></h2>
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">日期</th>
            <th scope="col">理由</th>
            <th scope="col">費用</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="history in stampingDie.histories" :key="history.id">
            <td>{{ history.date }}</td>
            <td>{{ history.description }}</td>
            <td>NT${{ history.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
const dummyData = [
  {
    id: 1,
    model: '114S70',
    correspondingParts: 'XC8418051',
    type: '消耗型',
    name: '下料',
    getDate: '2019/1',
    purchasingPrice: 25000,
    creator: '明盛企業社',
    lifeSpan: '80000',
    material: 'SKD11',
    weight: 14.7,
    usageHistories: [
      {
        id: 1,
        date: '2020/01/01',
        amount: 1000,
        note: 'note_1'
      },
      {
        id: 2,
        date: '2023/02/30',
        amount: 234,
        note: 'note_2'
      }
    ],
    histories: [
      {
        id: 1,
        date: '2020/01/01',
        description: 'R角處缺角',
        price: 3000
      },
      {
        id: 2,
        date: '2023/02/30',
        description: '壽命達到，無法修復，報廢',
        price: 0
      }
    ]
  },
  {
    id: 2,
    model: '114S70',
    correspondingParts: 'XC5868051',
    type: '消耗型',
    name: '下料',
    getDate: '2019/1',
    purchasingPrice: 25000,
    creator: '明盛企業社',
    lifeSpan: '100000',
    material: 'SKD11',
    weight: 10.7,
    usageHistories: [],
    histories: []
  },
  {
    id: 6,
    model: '114S70',
    correspondingParts: 'XC8102051',
    type: '消耗型',
    name: '下料',
    getDate: '2019/1',
    purchasingPrice: 25000,
    creator: '明盛企業社',
    lifeSpan: '50000',
    material: 'SKD11',
    weight: 4.7,
    usageHistories: [
      {
        id: 1,
        date: '2020/01/01',
        amount: 2000,
        note: 'note_3'
      },
      {
        id: 2,
        date: '2023/02/30',
        amount: 456,
        note: 'note_4'
      },
      {
        id: 3,
        date: '2023/04/30',
        amount: 789,
        note: 'note_5'
      }
    ],
    histories: [
      {
        id: 1,
        date: '2022/02/03',
        description: '磨耗造成出現毛邊',
        price: 5000
      },
    ]
  }
]
export default {
  data() {
    return {
      stampingDie: ''
    }
  },
  methods: {
    fetchStampingDie(id) {
      let left = -1, right = dummyData.length
      while (left + 1 !== right) {
        let mid = (left + right) / 2
        if (dummyData[mid].id === id) { this.stampingDie = dummyData[mid]; break }
        if (dummyData[mid].id > id) { right = mid; continue }
        if (dummyData[mid].id < id) { left = mid; continue }
      }
      let totalUsage = 0
      for (let i = 0; i < this.stampingDie.usageHistories.length; i++) { //加總使用數
        totalUsage += this.stampingDie.usageHistories[i].amount
      }
      this.stampingDie.totalUsage = totalUsage
    }
  },
  created() {
    this.fetchStampingDie(this.$route.params.id);
  },
}
</script>

<style scoped></style>