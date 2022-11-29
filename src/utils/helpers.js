import Axios from "axios";
import Swal from "sweetalert2";

const baseURL = 'https://inventory-system-test54545.herokuapp.com/api'
// const baseURL = '127.0.0.1:3000'

const axiosInstance = Axios.create({
  baseURL
})

axiosInstance.interceptors.request.use(
  config => {
    // 從 localStorage 將 token 取出
    const token = localStorage.getItem('token')

    // 如果 token 存在的話，則帶入到 headers 當中
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  err => Promise.reject(err)
)

export const apiHelper = axiosInstance

export const ToastBottom = Swal.mixin({
  toast: true,
  position: 'bottom',
  showConfirmButton: false,
  timer: 5000
})

export const ToastBase = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 5000
})

export const ToastWarningCenter = Swal.mixin({
  icon: 'warning'
})

export const ToastErrorCenter = Swal.mixin({
  icon: 'error'
})

export const ToastSuccessCenter = Swal.mixin({
  icon: 'success'
})

export const ToastConfirm = Swal

export const ToastConfirmed = Swal