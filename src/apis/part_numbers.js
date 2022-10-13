import { apiHelper } from './../utils/helpers'

export default {
  // 帶入需要的參數
  getPartNumbers(customerId) {
    // 這裡 return 的會是一個 Promise
    const searchParams = new URLSearchParams(customerId)
    // console.log(searchParams.toString())
    // return apiHelper.get(`/warehouse/partnumbers`)
    return apiHelper.get(`/warehouse/partnumbers?${searchParams.toString()}`)
  }
}