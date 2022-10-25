import { apiHelper } from './../utils/helpers'

export default {
  getCurrentUser() {
    return apiHelper.get('/get_current_user')
  },
  updatePassword(userId, formData) {
    return apiHelper.put(`/user/password/${userId}`, formData)
  }
}