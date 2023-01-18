import { apiHelper } from './../utils/helpers'

export default {
  getAll() {
    return apiHelper.get(`/production_process_items`)
  },
}