import { apiHelper } from "../utils/helpers";

export default {
  partNumbers: {
    // 帶入需要的參數
    get(customerId) {
      const searchParams = new URLSearchParams(customerId)
      return apiHelper.get(`/manager/partnumbers?${searchParams.toString()}`)
    },
    getSearch(queryContent) {
      const searchParams = new URLSearchParams(queryContent)
      return apiHelper.get(`/manager/partnumbers/search?${searchParams.toString()}`)
    }
  },
  customers: {
    get() {
      return apiHelper.get(`/manager/customers`)
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
    }
  }

}