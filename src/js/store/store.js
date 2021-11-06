import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		kittenImg: 'http://placekitten.com/g/460/460',
		formTitle: '',
		formBody: '',
		contacted: false
	},
	mutations: {
		
	}
})
