import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        {
          name: 'หน้าหลัก',
          path: '/',
          component: () => import('@/views/dashboard/Dashboard'),
        },
        // Pages
        {
          name: 'ทางหลวงชนบท',
          path: '/pages/Ruralroad',
          component: () => import('@/views/dashboard/pages/Ruralroad'),
        },
        {
          name: 'User Profile',
          path: 'pages/user',
          component: () => import('@/views/dashboard/pages/UserProfile'),
        },
        {
          name: 'User Profile',
          path: 'pages/login',
          component: () => import('@/views/dashboard/pages/Login'),
        },
        {
          name: 'จัดการรายการอุปกรณ์',
          path: '/pages/device',
          component: () => import('@/views/dashboard/pages/Device'),
        },
        {
          name: 'แก้ไขรายการอุปกรณ์',
          path: 'device/editdevice',
          component: () => import('@/views/dashboard/pages/DeviceEdit'),
        },
        {
          name: 'Notifications',
          path: 'components/notifications',
          component: () => import('@/views/dashboard/component/Notifications'),
        },
        {
          name: 'Icons',
          path: 'components/icons',
          component: () => import('@/views/dashboard/component/Icons'),
        },
        {
          name: 'Typography',
          path: 'components/typography',
          component: () => import('@/views/dashboard/component/Typography'),
        },
        // Tables
        {
          name: 'แสดงรายการอุปกรณ์',
          path: 'tables/regular-tables',
          component: () => import('@/views/dashboard/tables/RegularTables'),
        },
        // Maps
        {
          name: 'แผนที่',
          path: 'maps/google-maps',
          component: () => import('@/views/dashboard/maps/GoogleMaps'),
        },
        // Upgrade
        {
          name: 'Upgrade',
          path: 'upgrade',
          component: () => import('@/views/dashboard/Upgrade'),
        },
      ],
    },
  ],
})
