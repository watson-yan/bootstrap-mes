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
    }
  ]
}]
