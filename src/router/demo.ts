export default [
  {
    path: '/demo/index',
    name: 'DemoIndex',
    component: () => import(/* webpackChunkName: "components" */ '../views/Demo/index.vue'),
    children: [
      {
        path: '',
        name: 'cutting',
        component: () => import(/* webpackChunkName: "components" */ '../views/Demo/cutting.vue')
      },
      {
        path: 'ht',
        name: 'ht',
        component: () => import(/* webpackChunkName: "components" */ '../views/Demo/ht.vue')
      }
    ]
  },
  {
    path: '/demo/home',
    name: 'DemoHome',
    component: () => import(/* webpackChunkName: "components" */ '../views/Demo/home.vue')
  }
]
