/* eslint-disable prefer-template */
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueScrollTo from 'vue-scrollto';
import Home from '../views/Home.vue';
import Projects from '../assets/Projects';


Vue.use(VueRouter);
Vue.use(VueScrollTo);

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/Projects',
		name: 'projects',
		component: () => import('../views/Projects/Index.vue'),
		children: Projects.map((x) => {
			const name = x.title.replace(/ /g, '-');
			return {
				path: name,
				component: () => import('../views/Projects/' + name + '.vue'),
			};
		}),
	},
];

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
	window.scrollTo(0, 0);
	next();
});

export default router;
