export default [
  {
    path: '/demo/index',
    name: 'DemoIndex',
    component: () => import(/* webpackChunkName: "components" */ '../views/Demo/index.vue')
  }
]
