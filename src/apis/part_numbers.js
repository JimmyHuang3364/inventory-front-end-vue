import { apiHelper } from './../utils/helpers'

export default {
  // 帶入需要的參數
  getPartNumbers(customerId) { //取得所有部品，歷史資料或特一客戶資料部品，歷史資料
    // 這裡 return 的會是一個 Promise
    const searchParams = new URLSearchParams(customerId)
    return apiHelper.get(`/warehouse/partnumbers?${searchParams.toString()}`)
  },
  getSubPartNumbers() { //取得所有子部品
    return apiHelper.get(`/warehouse/subpartnumbers`)
  },
  getSearchPartNumbers(queryContent) {
    const searchParams = new URLSearchParams(queryContent)
    return apiHelper.get(`/warehouse/partnumbers/search?${searchParams.toString()}`)
  },

}