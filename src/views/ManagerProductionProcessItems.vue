<template>
  <div class="mt-5 container">
    <div v-if="isLoading">
      <Loader />
    </div>

    <div v-if="!isLoading">
      <div class="mb-2">
        <form @submit.stop.prevent="createProductionProcessItem" v-if="isCreate" class="d-flex justify-content-start">
          <div class="d-flex align-items-center">
            <span class="text-light">製程名稱：</span>
          </div>
          <div class="input-group input-group-sm d-flex align-items-center text_input_box mr-1">
            <input type="text" class="form-control" name="name" id="name" v-model="productionProcessItem.name" required>
          </div>
          <button type="submit" class="btn btn-primary" :disabled="isProcessing">{{ isProcessing? "處理中...": "送出" }}</button>
          <button @click.stop.prevent="createToggle" type="button" class="btn btn-outline-danger ml-1">取消</button>
        </form>
        <button @click.stop.prevent="createToggle" v-if="!isCreate" type="button" class="btn btn-outline-light">+新增製程</button>
      </div>
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col" class="col_1">#</th>
            <th scope="col">製程名稱</th>
            <th scope="col" class="col_3">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="productionProcessItem in productionProcessItems" :key="productionProcessItem.id">
            <th scope="row">{{ productionProcessItem.id }}</th>
            <td>
              <div v-show="!productionProcessItem.isEditing">
                {{ productionProcessItem.processName }}
              </div>
              <input v-show="productionProcessItem.isEditing" v-model="productionProcessItem.processName" @keydown.esc="toggleIsEditing(productionProcessItem.id)" type="text" class="form-control form-control-sm m-auto editing_input" :ref="productionProcessItem.id" name="name" id="name">

            </td>
            <td>
              <div v-if="!productionProcessItem.isEditing" class="d-flex">
                <button @click.stop.prevent="toggleIsEditing(productionProcessItem.id)" class="btn btn-outline-warning btn-sm" :class="[{ 'active': productionProcessItem.isEditing }]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                  </svg>
                </button>

                <button @click.stop.prevent="deleteProductionProcessItem(productionProcessItem.id)" class="btn btn-outline-danger btn-sm ml-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                  </svg>
                </button>
              </div>

              <div v-if="productionProcessItem.isEditing" class="d-flex">
                <button @click.stop.prevent="updateProductionProcessItem(productionProcessItem.id, productionProcessItem.processName, productionProcessItem.nameCached)" class="btn btn-outline-success btn-sm">
                  Done
                </button>

                <button @click.stop.prevent="cancelIsEditing(productionProcessItem.id)" class="btn btn-outline-danger btn-sm ml-3">
                  Cancel
                </button>
              </div>

            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { ToastBottom, ToastConfirm, ToastConfirmed } from '../utils/helpers'
import Loader from '../components/Loader.vue'
import managersAPI from '../apis/managers';

export default {
  components: { Loader, },
  name: 'ManagerProductionProcessItems',
  created() {
    this.fetchProductionProcessItems();
    this.isLoading = false
  },
  data() {
    return {
      productionProcessItems: [],
      productionProcessItem: {
        name: ''
      },
      isCreate: false,
      isLoading: true,
      isProcessing: false
    }
  },
  methods: {
    async fetchProductionProcessItems() {
      try {
        const { data, status, statusText } = await managersAPI.productionProcessItems.getAll()
        if (statusText !== "OK" && status !== 200) { throw new Error() }
        if (data.status !== 'success') { throw new Error(data.message) }
        this.productionProcessItems = data.productionProcessItems.map(productionProcessItem => ({
          ...productionProcessItem,
          isEditing: false,
          nameCached: ''
        }))
      }
      catch (error) {
        ToastBottom.fire({
          icon: "error",
          title: "載入錯誤，請稍後再試。"
        });
        this.isLoading = false
      }
    },

    async createProductionProcessItem(e) {
      try {
        this.isProcessing = true
        // 驗證資料完整性
        if (!this.productionProcessItem.name) { throw new Error('名稱不可空白') }
        const form = e.target
        const formData = new FormData(form)
        const { data } = await managersAPI.productionProcessItems.create(formData)
        if (data.status === 'error') { throw new Error(data.message) }
        data.productionProcessItem = {
          ...data.productionProcessItem,
          isEditing: false,
          nameCached: ''
        }
        this.productionProcessItems.push(data.productionProcessItem)
        this.productionProcessItem.name = ''
        this.isProcessing = false
        ToastBottom.fire({
          icon: 'success',
          title: data.message
        })
      }
      catch (error) {
        ToastBottom.fire({
          icon: 'error',
          title: error
        })
        this.isProcessing = false
      }
    },

    async deleteProductionProcessItem(productionProcessItemId) {
      try {
        const deleteConfirm = await ToastConfirm.fire({
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          icon: 'warning',
          title: '確定刪除?',
          text: '確定後，你將會刪除此製程。',
          confirmButtonText: '確定'
        })

        if (deleteConfirm.value) {
          const { data, statusText } = await managersAPI.productionProcessItems.delete(productionProcessItemId)
          if (statusText !== "OK" && status !== 200) { throw new Error() }
          if (data.status !== 'success') { throw new Error(data.message) }
          this.productionProcessItems = this.productionProcessItems.filter(productionProcessItem => productionProcessItem.id !== productionProcessItemId)
          ToastConfirmed.fire(
            '刪除！',
            `${data.message}`,
            'success'
          )
        }
      }
      catch (error) {
        ToastBottom.fire({
          icon: 'error',
          title: error
        })
      }
    },

    async updateProductionProcessItem(productionProcessItemId, newName, oldName) {
      try {
        if (newName === oldName) {
          this.toggleIsEditing(productionProcessItemId)
          return
        }
        if (newName === '') {
          { throw new Error('請填入名稱') }
        }
        const { data, statusText } = await managersAPI.productionProcessItems.update(productionProcessItemId, { name: newName })
        if (statusText !== 'OK' && status !== 200) { throw new Error(data.message) }
        if (data.status !== 'success') { throw new Error(data.message) }
        ToastBottom.fire({
          icon: 'success',
          title: data.message
        })
        this.toggleIsEditing(productionProcessItemId)
      }
      catch (error) {
        ToastBottom.fire({
          icon: 'error',
          title: error
        })
      }
    },

    createToggle() {
      this.isCreate = !this.isCreate
    },

    toggleIsEditing(productionProcessItemId) {
      this.productionProcessItems.map(productionProcessItem => {
        if (productionProcessItem.id === productionProcessItemId) {
          productionProcessItem.isEditing = !productionProcessItem.isEditing
          productionProcessItem.nameCached = productionProcessItem.processName
        }
        if (productionProcessItem.id !== productionProcessItemId) {
          productionProcessItem.isEditing = false
        }
      })
    },

    cancelIsEditing(productionProcessItemId) {
      this.productionProcessItems.map(productionProcessItem => {
        if (productionProcessItem.id === productionProcessItemId) {
          productionProcessItem.isEditing = !productionProcessItem.isEditing
          productionProcessItem.processName = productionProcessItem.nameCached
        }
      })
    }
  },

}
</script>

<style scoped>
td,
th {
  text-align: center;
}

.text_input_box {
  max-width: 200px;
}

.col_3,
.col_1 {
  width: 5%;
}

.editing_input {
  width: 50%
}

.material-symbols-outlined {
  font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 48
}
</style>