import Home from './components/Home.vue';
import About from './components/About.vue';
import Contactus from './components/Contactus.vue';
import Article from './components/Article.vue';
import NotFound from './components/NotFound.vue';

export const routes = [
	{
		path: '',
		name: 'home',
		component: Home
	},
	{
		path: '/about',
		name: 'about',
		component: About
	},
	{
		path: '/contactus',
		name: 'contactus',
		component: Contactus
	},
	{
		path: '/article/:id(\\d)', // поставил только цифры 1-9, но можно будет брать массив всех доступных статей (например из vuex) и сделать из него регулярку
		name: 'article',
		component: Article
	},
	{
		path: '*', // 404 для всех остальных вхождений
		component: NotFound
	}
]
