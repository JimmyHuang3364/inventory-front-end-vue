import { apiHelper } from "../utils/helpers";

export default {
  customers: {
    get() {
      return apiHelper.get(`/manager/customers`)
    },
    getDetail(customerId) {
      return apiHelper.get(`/manager/customers/${customerId}`)
    },
    create(formData) {
      return apiHelper.post('/manager/customers/create', formData)
    },
    update({ customerId, formData }) {
      return apiHelper.put(`/manager/customers/${customerId}`, formData)
    },
    delete(customerId) {
      return apiHelper.delete(`/manager/customers/${customerId}`)
    }
  },
  partNumbers: {
    // 帶入需要的參數
    get(customerId) {
      const searchParams = new URLSearchParams(customerId)
      return apiHelper.get(`/manager/partnumbers?${searchParams.toString()}`)
    },
    getSearch(queryContent) {
      const searchParams = new URLSearchParams(queryContent)
      return apiHelper.get(`/manager/partnumbers/search?${searchParams.toString()}`)
    }
  },
  users: {
    create(formData) {
      return apiHelper.post('/manager/users/signup', formData)
    }
  },
  warehousingHistories: {
    get(customerId) {
      const searchParams = new URLSearchParams(customerId)
      return apiHelper.get(`/manager/WarehousingHistories?${searchParams.toString()}`)
    },
    getSearch(queryContent) {
      const searchParams = new URLSearchParams(queryContent)
      return apiHelper.get(`/manager/WarehousingHistories/search?${searchParams.toString()}`)
    }
  }

}