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
  }
}