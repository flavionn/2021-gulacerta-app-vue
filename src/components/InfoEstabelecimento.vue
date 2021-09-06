<script setup>

import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import useEstabelecimento from '@/modules/Estabelecimento'

const route = useRoute()
const { estabelecimento, loadEstabelecimento } = useEstabelecimento()

onMounted(async () => {
	await loadEstabelecimento(route.params.id)
})

</script>

<template lang="pug">

div(class="pt-12")
	div(
		v-if="estabelecimento.title"
		v-html="estabelecimento.title.rendered"
		)

</template>