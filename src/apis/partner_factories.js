import { apiHelper } from './../utils/helpers'

export default {
  getAll() {
    return apiHelper.get(`/partner_factories`)
  },
}