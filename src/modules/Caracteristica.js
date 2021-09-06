import { reactive, toRefs } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

export default function useCaracteristica() {
	const state = reactive({
		caracteristicas: [],
		// tipoNome: '',
	})

	const loadCaracteristicas = async () => {
		try {
			await axios
			.get('http://www.gulacerta.com.br/wp-json/wp/v2/caracteristica?_fields=id,name&orderby=count&order=desc')
			.then(item => {
				state.caracteristicas = item.data
			})
		}
		catch(e) {
			console.log('Error loading')
		}
	}

	// const loadTipoNome = async (id) => {
	// 	try {
	// 		await axios
	// 		.get('http://www.gulacerta.com.br/wp-json/wp/v2/tipo/' + id + '?_fields=name')
	// 		.then(item => {
	// 			state.tipoNome = item.data.name
	// 		})
	// 	}
	// 	catch(e) {
	// 		console.log('Error loading')
	// 	}
	// }

	return {
		...toRefs(state),
		loadCaracteristicas,
		// loadTipoNome,
	}
}