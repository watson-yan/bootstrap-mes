import PluginRoot from '../views/Plugin/root.vue'

export default [{
  path: '/plugin',
  component: PluginRoot,
  children: [
    {
      path: 'message',
      name: 'PluginMessage',
      component: () => import(/* webpackChunkName: "components" */ '../views/Plugin/message.vue')
    },
    {
      path: 'icon',
      name: 'PluginICon',
      component: () => import(/* webpackChunkName: "components" */ '../views/Plugin/icon.vue')
    },
    {
      path: 'bootstrapTable',
      name: 'bootstrapTable',
      component: () => import(/* webpackChunkName: "components" */ '../views/Plugin/bootstrap-table.vue')
    },
    {
      path: 'select2',
      name: 'select2',
      component: () => import(/* webpackChunkName: "components" */ '../views/Plugin/select2.vue')
    }
  ]
}]
