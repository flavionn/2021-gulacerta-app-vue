<script setup>

import { onMounted } from 'vue'
import useTipo from '@/modules/Tipo'
import useCaracteristica from '@/modules/Caracteristica'
import useBairro from '@/modules/Bairro'
import useNacionalidade from '@/modules/Nacionalidade'

const { tipos, loadTipos } = useTipo()
const { caracteristicas, loadCaracteristicas } = useCaracteristica()
const { bairros, loadBairros } = useBairro()
const { nacionalidades, loadNacionalidades } = useNacionalidade()

onMounted(async () => {
	await loadTipos()
	await loadCaracteristicas()
	await loadBairros()
	await loadNacionalidades()
})

</script>

<template lang="pug">

div(class="space-y-24")
	div(class="text-4xl font-bold tracking-tight w-4/5") Encontre um lugar legal para ir hoje em Brasília

	div(class="space-y-4")
		group-header O que você esta buscando?
		row(:content="tipos")

	div(class="space-y-4")
		group-header Qual é o mood pra hoje?
		row(:content="caracteristicas")

	div(class="space-y-4")
		group-header Vai pra onde?
		row(:content="bairros")

	div(class="space-y-4")
		group-header Se sentindo internacional?
		row(:content="nacionalidades")

</template>