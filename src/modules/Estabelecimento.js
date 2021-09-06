import { reactive, toRefs } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

export default function useEstabelecimento() {
	const state = reactive({
		estabelecimentos: [],
		estabelecimento: {},
	})

	const loadEstabelecimentos = async (id) => {
		try {
			await axios
			.get('http://www.gulacerta.com.br/wp-json/wp/v2/estabelecimento?tipo=' + id + '&_fields=id,title&orderby=date&order=desc&per_page=100')
			.then(item => {
				state.estabelecimentos = item.data
			})
		}
		catch(e) {
			console.log('Error loading')
		}
	}

	const loadEstabelecimento = async (id) => {
		try {
			await axios
			.get('http://www.gulacerta.com.br/wp-json/wp/v2/estabelecimento/' + id + '?_fields=slug,title')
			.then(item => {
				state.estabelecimento = item.data
			})
		}
		catch(e) {
			console.log('Error loading')
		}
	}

	return {
		...toRefs(state),
		loadEstabelecimentos,
		loadEstabelecimento,
	}
}