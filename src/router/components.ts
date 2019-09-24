import ComponentRoot from '../views/Components/root.vue'

const componentRouters = [
  {
    path: '/components',
    component: ComponentRoot,
    children: [
      {
        path: '',
        name: 'ComponentsButton',
        component: () => import(/* webpackChunkName: "components" */ '../views/Components/button.vue')
      },
      {
        path: 'button',
        name: 'ComponentsButton',
        component: () => import(/* webpackChunkName: "components" */ '../views/Components/button.vue')
      },
      {
        path: 'badge',
        name: 'ComponentsTag',
        component: () => import(/* webpackChunkName: "components" */ '../views/Components/badge.vue')
      },
      {
        path: 'form',
        name: 'ComponentsForm',
        component: () => import(/* webpackChunkName: "components" */ '../views/Components/form.vue')
      },
      {
        path: 'input',
        name: 'ComponentsInput',
        component: () => import(/* webpackChunkName: "components" */ '../views/Components/input.vue')
      },
      {
        path: 'checkbox',
        name: 'ComponentsCheckbox',
        component: () => import(/* webpackChunkName: "components" */ '../views/Components/checkbox.vue')
      },
      {
        path: 'table',
        name: 'ComponentsTable',
        component: () => import(/* webpackChunkName: "components" */ '../views/Components/table.vue')
      },
      {
        path: 'radio',
        name: 'ComponentsRadio',
        component: () => import(/* webpackChunkName: "components" */ '../views/Components/radio.vue')
      },
      {
        path: 'switch',
        name: 'ComponentsSwitch',
        component: () => import(/* webpackChunkName: "components" */ '../views/Components/switch.vue')
      },
      {
        path: 'dropdown',
        name: 'ComponentsDropdown',
        component: () => import(/* webpackChunkName: "components" */ '../views/Components/dropdown.vue')
      },
      {
        path: 'tab',
        name: 'ComponentsTab',
        component: () => import(/* webpackChunkName: "components" */ '../views/Components/tab.vue')
      },
      {
        path: 'progress',
        name: 'ComponentsProgress',
        component: () => import(/* webpackChunkName: "components" */ '../views/Components/progress.vue')
      },
      {
        path: 'card',
        name: 'ComponentsCard',
        component: () => import(/* webpackChunkName: "components" */ '../views/Components/card.vue')
      },
      {
        path: 'alert',
        name: 'ComponentsAlert',
        component: () => import(/* webpackChunkName: "components" */ '../views/Components/alert.vue')
      }
    ]
  }
]

export default componentRouters
