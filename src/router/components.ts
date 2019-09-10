import ComponentRoot from '../views/Components/root.vue'

const componentRouters = [
  {
    path: '/components',
    component: ComponentRoot,
    children: [
      {
        path: '',
        name: 'ComponentsIndex',
        component: () => import(/* webpackChunkName: "components" */ '../views/Components/index.vue')
      },
      {
        path: 'button',
        name: 'ComponentsButton',
        component: () => import(/* webpackChunkName: "components" */ '../views/Components/button.vue')
      },
      {
        path: 'tag',
        name: 'ComponentsTag',
        component: () => import(/* webpackChunkName: "components" */ '../views/Components/tag.vue')
      },
      {
        path: 'form',
        name: 'ComponentsForm',
        component: () => import(/* webpackChunkName: "components" */ '../views/Components/form.vue')
      },
      {
        path: 'text',
        name: 'ComponentsForm',
        component: () => import(/* webpackChunkName: "components" */ '../views/Components/text.vue')
      }
    ]
  }
]

export default componentRouters
