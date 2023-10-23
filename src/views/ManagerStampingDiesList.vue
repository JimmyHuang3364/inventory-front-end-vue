<template>
  <div class="m-5">
    <h1 class="text-white text-center mb-3">模具管理</h1>

    <div class="d-flex flex-row justify-content-between align-items-center my-3">
      <div>
        <button type="button" class="btn btn-outline-secondary m-1">公司1</button>
        <button type="button" class="btn btn-outline-secondary m-1">公司2</button>
        <button type="button" class="btn btn-outline-secondary m-1">公司3</button>
        <button type="button" class="btn btn-outline-secondary m-1">公司4</button>
      </div>

      <div>
        <router-link :to="{ name: 'manager-Stamping_Dies_New' }" class="btn btn-outline-warning" role="button">+新增模具</router-link>
      </div>
    </div>

    <!-- tag要轉用router link -->
    <div v-for="stampingDie in stampingDies" :key="stampingDie.id" class="mx-auto rounded-pill item-style border-style item-hover">
      <router-link :to="{ name: 'manager-Stamping_Die_Content', params: { id: stampingDie.id } }" class=" d-flex align-items-center justify-content-around p-3 text-white router-link-style">
        <p class="mb-0">流水號：{{ stampingDie.id }}</p>
        <p class="mb-0 ml-2">機種：{{ stampingDie.model }}</p>
        <p class="mb-0 ml-2">品翻：{{ stampingDie.correspondingParts }}</p>
        <p class="mb-0 ml-2">壽命(目前/額度)： {{ stampingDie.totalUsage }} / {{ stampingDie.lifeSpan }}</p>
      </router-link>
    </div>

  </div>
</template>

<script>
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
      stampingDies: []
    }
  },
  methods: {
    fetchStampingDies() {
      this.stampingDies = [...dummyData]
      for (let i = 0; i < this.stampingDies.length; i++) {
        let totalUsage = 0
        for (let k = 0; k < this.stampingDies[i].usageHistories.length; k++) {
          totalUsage += this.stampingDies[i].usageHistories[k].amount
        }
        this.stampingDies[i].totalUsage = totalUsage
      }
    }
  },
  created() {
    this.fetchStampingDies();
  },
}
</script>

<style scoped>
.item-style {
  width: 90%;
  height: 64px;
  color: white;
  margin: 5px 0;
}

.border-style {
  border-style: solid;
  border-width: 5px;
  border-color: yellowgreen;
}

.item-hover:hover {
  margin: 10px 0px;
  background-color: rgb(90, 121, 28);
  transition: 0.1s;
}

.router-link-style {
  text-decoration: none;
}
</style>