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
		group-header Tipo
		row(:content="tipos")

	div(class="space-y-4")
		group-header Característica
		row(:content="caracteristicas")

	div(class="space-y-4")
		group-header Bairro
		row(:content="bairros")

	div(class="space-y-4")
		group-header Nacionalidade
		row(:content="nacionalidades")

</template>