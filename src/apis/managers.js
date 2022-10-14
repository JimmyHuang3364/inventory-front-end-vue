import { apiHelper } from "../utils/helpers";

export default {
  // 帶入需要的參數
  getPartNumbers(customerId) {
    const searchParams = new URLSearchParams(customerId)
    return apiHelper.get(`/manager/partnumbers?${searchParams.toString()}`)
  },
  getCustomers() {
    return apiHelper.get(`/manager/WarehousingHistories`)
  },
  getWarehousingHistories(customerId) {
    const searchParams = new URLSearchParams(customerId)
    return apiHelper.get(`/manager/WarehousingHistories?${searchParams.toString()}`)
  },

}