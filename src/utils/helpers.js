import Axios from "axios";
import Swal from "sweetalert2";

const baseURL = 'http://localhost:3000/api'

export const apiHelper = Axios.create({
  baseURL
})

export const ToastBottom = Swal.mixin({
  toast: true,
  position: 'bottom',
  showConfirmButton: false,
  timer: 3000
})

