import { apiHelper } from './../utils/helpers'

export default {
  // 帶入需要的參數
  getPartNumbers() {
    // 這裡 return 的會是一個 Promise
    return apiHelper.get('/warehouse/partnumbers')
  }
}