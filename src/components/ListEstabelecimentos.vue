<script setup>

import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import useEstabelecimento from '@/modules/Estabelecimento'

const route = useRoute()
const { estabelecimentos, loadEstabelecimentos } = useEstabelecimento()

onMounted(async () => {
	await loadEstabelecimentos(route.params.id)
})

</script>

<template lang="pug">

div(class="pt-12 flex flex-wrap gap-4")
	router-link(
		v-for="item in estabelecimentos"
		:to="{ name: 'estabelecimento-id', params: { id: item.id } }"
		class="bg-white h-36 flex-grow w-50 rounded-xl flex items-end pb-4 px-4 font-medium"
		v-html="item.title.rendered"
		)

</template>