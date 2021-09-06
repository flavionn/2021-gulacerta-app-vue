<script setup>

import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import useTipo from '@/modules/Tipo'

const route = useRoute()
const { tipoNome, loadTipoNome } = useTipo()

onMounted(async () => {
	await loadTipoNome(route.params.id)
})

</script>

<template lang="pug">

div
	page-header(
		:title="tipoNome"
		navback=true
		)
	list-estabelecimentos

</template>