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
    getOneDetail(partNumberId) {
      return apiHelper.get(`/manager/partnumbers/${partNumberId}`)
    },
    getSearch(queryContent) {
      const searchParams = new URLSearchParams(queryContent)
      return apiHelper.get(`/manager/partnumbers/search?${searchParams.toString()}`)
    },
    create(formData) {
      return apiHelper.post('/manager/partnumber/create', formData)

    },
    update(partNumberId, formData) {
      return apiHelper.put(`/manager/partnumbers/${partNumberId}`, formData)
    },
    delete(partNumberId) {
      return apiHelper.delete(`/manager/partnumbers/${partNumberId}`)
    }
  },
  subPartNumbers: {
    getOneDetail(subPartNumberId) {
      return apiHelper.get(`/manager/subpartnumbers/${subPartNumberId}`)
    },
    update(partNumberId, formData) {
      return apiHelper.put(`/manager/subpartnumbers/${partNumberId}`, formData)
    },
    delete(subPartNumberId) {
      return apiHelper.delete(`/manager/subpartnumbers/${subPartNumberId}`)
    },
  },
  users: {
    create(formData) {
      return apiHelper.post('/manager/users/signup', formData)
    },
    get() {
      return apiHelper.get(`/manager/users`)
    },
    delete(userId) {
      return apiHelper.delete(`/manager/users/${userId}`)
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
    },
    delete(queryId) {
      return apiHelper.delete(`/manager/WarehousingHistories/${queryId}`)
    },
  },

  partnerFactories: {
    getAll() {
      return apiHelper.get(`/manager/partner_factories`)
    },
    create(formData) {
      return apiHelper.post('/manager/partner_factories/create', formData)
    },
    delete(partnerFactoryId) {
      return apiHelper.delete(`/manager/partner_factories/${partnerFactoryId}`)
    },
    getOneDetail(partnerFactoryId) {
      return apiHelper.get(`/manager/partner_factories/${partnerFactoryId}`)
    },
    update(partnerFactoryId, formData) {
      return apiHelper.put(`/manager/partner_factories/${partnerFactoryId}`, formData)
    },
  }

}