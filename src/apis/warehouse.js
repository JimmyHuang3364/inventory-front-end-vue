import { apiHelper } from './../utils/helpers'

export default {
  Warehousing: {
    create(formData) {
      return apiHelper.post('/warehouse/warehousing', formData)
    },
  },
  Shipping: {
    create(formData) {
      return apiHelper.post('/warehouse/shipping', formData)
    },
  },
  Outsourcinglist: {
    get() {
      return apiHelper.get('/warehouse/outsourcinglist')
    },
    create(formData) {
      return apiHelper.post(`/warehouse/outsourcinglist/create`, formData)
    },
    delete(outsourcinglistId) {
      return apiHelper.delete(`/warehouse/outsourcinglist/${outsourcinglistId}`)
    },
    done(outsourcinglistId, formData) {
      return apiHelper.post(`/warehouse/outsourcinglist/${outsourcinglistId}/done`, formData)
    }
  }
}