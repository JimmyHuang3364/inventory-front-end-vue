import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/signin'
  },
  {
    path: '/signin',
    name: 'sign-in',
    component: () => import('../views/Signin.vue')
  },
  {
    path: '/warehouse/partnumbers',
    name: 'warehouse-part-numbers',
    component: () => import('../views/PartNumbers.vue')
  },
  {
    path: '/warehouse/ShippingWarehousing',
    name: 'warehouse-ShippingWarehousing',
    component: () => import('../views/ShippingWarehousing.vue')
  },
  {
    path: '/manager/partnumbers',
    name: 'manager-part-numbers',
    component: () => import('../views/ManagerPartnumbers.vue')
  },
  {
    path: '/manager/partnumbers/new',
    name: 'manager-part-numbers-new',
    component: () => import('../views/ManagerPartNumberNew.vue')
  },
  {
    path: '/manager/partnumbers/:id/edit',
    name: 'manager-part-numbers-edit',
    component: () => import('../views/ManagerPartNumberEdit.vue')
  },
  {
    path: '/manager/subpartnumbers/:id/edit',
    name: 'manager-sub-part-numbers-edit',
    component: () => import('../views/ManagerSubPartNumberEdit.vue')
  },
  {
    path: '/manager/WarehousingHistories',
    name: 'manager-warehousing-histories',
    component: () => import('../views/ManagerWarehousingHistories.vue')
  },
  {
    path: '/manager/customers',
    name: 'manager-customers',
    component: () => import('../views/ManagerCustomers.vue')
  },
  {
    path: '/manager/customers/new',
    name: 'manager-customers-new',
    component: () => import('../views/ManagerCustomerNew.vue')
  },
  {
    path: '/manager/customers/:id/edit',
    name: 'manager-customers-edit',
    component: () => import('../views/ManagerCustomerEdit.vue')
  },
  {
    path: '/manager/users',
    name: 'manager-users',
    component: () => import('../views/ManagerUsers.vue')
  },
  {
    path: '/manager/users/new',
    name: 'manager-users-new',
    component: () => import('../views/ManagerUserSignup.vue')
  },
  {
    path: '/users/change-password',
    name: 'users-change-password',
    component: () => import('../views/ChangePassword.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: () => import('../views/NotFound.vue')
  },
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

router.beforeEach(async (to, from, next) => {
  // ??? localStorage ?????? token
  const tokenInLocalStorage = localStorage.getItem('token')
  const tokenInStore = store.state.token
  // ?????????????????????
  let isAuthenticated = store.state.isAuthenticated
  // ????????? token ???????????????
  if (tokenInLocalStorage && tokenInLocalStorage !== tokenInStore) {
    // ????????????????????????
    isAuthenticated = await store.dispatch('fetchCurrentUser')
  }

  // ????????????????????? token ?????????
  const pathsWithoutAuthentication = ['sign-in']

  // ?????? token ???????????????????????????
  if (!isAuthenticated && !pathsWithoutAuthentication.includes(to.name)) {
    next('/signin')
    return
  }

  // ?????? token ??????????????????????????????
  if (isAuthenticated && pathsWithoutAuthentication.includes(to.name)) {
    next('/warehouse/partnumbers')
    return
  }

  next()
})

export default router
