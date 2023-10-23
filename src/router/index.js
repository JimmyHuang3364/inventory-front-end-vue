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
    path: '/personalPractise',
    name: 'personalPractise',
    component: () => import('../views/PersonalPractise.vue')
  },
  {
    path: '/warehouse/home',
    name: 'warehouse-home',
    component: () => import('../views/Home.vue')
  },
  // {
  //   path: '/warehouse/partnumbers',
  //   name: 'warehouse-part-numbers',
  //   component: () => import('../views/PartNumbers.vue')
  // },
  // outsourcing
  {
    path: '/warehouse/outsourcing/new',
    name: 'warehouse-outsourcing-new',
    component: () => import('../views/Outsourcing.vue')
  },
  // ShippingWarehousing
  {
    path: '/warehouse/ShippingWarehousing',
    name: 'warehouse-ShippingWarehousing',
    component: () => import('../views/ShippingWarehousing.vue')
  },
  // partnumbers
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
  // WarehousingHistories
  {
    path: '/manager/WarehousingHistories',
    name: 'manager-warehousing-histories',
    component: () => import('../views/ManagerWarehousingHistories.vue')
  },
  // customers
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
  // partner_factories
  {
    path: '/manager/partner_factories',
    name: 'manager-partner-factories',
    component: () => import('../views/ManagerPartnerFactories.vue')
  },
  {
    path: '/manager/partner_factories/new',
    name: 'manager-partner-factories-new',
    component: () => import('../views/ManagerPartnerFactoryNew.vue')
  },
  {
    path: '/manager/partner_factories/:id/edit',
    name: 'manager-partner-factories-edit',
    component: () => import('../views/ManagerPartnerFactoryEdit.vue')
  },
  // production_process_items
  {
    path: '/manager/production_process_items',
    name: 'manager-production-process-items',
    component: () => import('../views/ManagerProductionProcessItems.vue'),
  },
  // users
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
  // Stamping_Dies
  {
    path: '/manager/Stamping_Dies',
    name: 'manager-Stamping_Dies',
    component: () => import('../views/ManagerStampingDiesList.vue')
  },
  {
    path: '/manager/Stamping_Dies/new',
    name: 'manager-Stamping_Dies_New',
    component: () => import('../views/ManagerStampingDiesNew.vue')
  },
  {
    path: '/manager/Stamping_Die_Content/id=:id',
    name: 'manager-Stamping_Die_Content',
    component: () => import('../views/ManagerStampingDieContent.vue')
  },
  // personal-option
  {
    path: '/users/change-password',
    name: 'users-change-password',
    component: () => import('../views/ChangePassword.vue')
  },
  // other
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
  // 從 localStorage 取出 token
  const tokenInLocalStorage = localStorage.getItem('token')
  const tokenInStore = store.state.token
  // 預設是尚未驗證
  let isAuthenticated = store.state.isAuthenticated
  // 如果有 token 的話才驗證
  if (tokenInLocalStorage && tokenInLocalStorage !== tokenInStore) {
    // 取得驗證成功與否
    isAuthenticated = await store.dispatch('fetchCurrentUser')
  }

  // 對於不需要驗證 token 的頁面
  const pathsWithoutAuthentication = ['sign-in', 'not-found', 'personalPractise']

  // 如果 token 無效則轉址到登入頁
  if (!isAuthenticated && !pathsWithoutAuthentication.includes(to.name)) {
    next('/signin')
    return
  }

  // 如果 token 有效則轉址到首頁
  if (isAuthenticated && pathsWithoutAuthentication.includes(to.name)) {
    next('/warehouse/home')
    return
  }

  next()
})

export default router
