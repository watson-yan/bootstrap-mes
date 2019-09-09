import ComponentRoot from '../views/Components/root.vue'

const componentRouters = [
  {
    path: '/components',
    component: ComponentRoot,
    children: [
      {
        path: '',
        // name: 'ComponentsIndex',
        component: () => import(/* webpackChunkName: "components" */ '../views/Components/index.vue')
      },
      {
        path: 'button',
        // name: 'ComponentsButton',
        component: () => import(/* webpackChunkName: "components" */ '../views/Components/button.vue')
      }
    ]
  }
]

export default componentRouters
