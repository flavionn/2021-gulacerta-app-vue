<script setup>

import { onMounted } from 'vue'
import useTipo from '@/modules/Tipo'

const { tipos, loadTipos } = useTipo()

onMounted(async () => {
	await loadTipos()
})

</script>

<template lang="pug">

div(class="flex flex-wrap gap-4")
	router-link(
		v-for="item in tipos"
		:to="{ name: 'tipo-id', params: { id: item.id } }"
		class="border border-gray-300 flex-grow h-36 w-50 rounded-xl flex items-end pb-4 px-4 font-medium"
		) {{ item.name }} ({{ item.count }})

</template>