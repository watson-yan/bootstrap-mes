import GuideRoot from '../views/Guide/root.vue';

export default [{
	path: '/guide',
	component: GuideRoot,
	children: [
		{
			path: '',
			name: 'GuideIndex',
			component: () => import(/* webpackChunkName: "components" */ '../views/Guide/index.vue')
		},
		{
			path: 'js',
			name: 'GuideJs',
			component: () => import(/* webpackChunkName: "components" */ '../views/Guide/js.vue')
		},
		{
			path: 'css',
			name: 'GuideCss',
			component: () => import(/* webpackChunkName: "components" */ '../views/Guide/css.vue')
		},
		{
			path: 'html',
			name: 'GuideHtml',
			component: () => import(/* webpackChunkName: "components" */ '../views/Guide/html.vue')
		}
	]
}]
