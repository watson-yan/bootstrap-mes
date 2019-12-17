import PluginRoot from '../views/Plugin/root.vue'

export default [{
  path: '/plugin',
  component: PluginRoot,
  children: [
    {
      path: 'message',
      name: 'PluginMessage',
      component: () => import(/* webpackChunkName: "plugins" */ '../views/Plugin/message.vue')
    },
    {
      path: 'icon',
      name: 'PluginICon',
      component: () => import(/* webpackChunkName: "plugins" */ '../views/Plugin/icon.vue')
    },
    {
      path: 'bootstrapTable',
      name: 'bootstrapTable',
      component: () => import(/* webpackChunkName: "plugins" */ '../views/Plugin/bootstrap-table.vue')
    },
    {
      path: 'select2',
      name: 'select2',
      component: () => import(/* webpackChunkName: "plugins" */ '../views/Plugin/select2.vue')
    },
    {
      path: 'ztree',
      name: 'ztree',
      component: () => import(/* webpackChunkName: "plugins" */ '../views/Plugin/tree.vue')
    }
  ]
}]
