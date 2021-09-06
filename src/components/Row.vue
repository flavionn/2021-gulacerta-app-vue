<script setup>

import { defineProps } from 'vue'

const props = defineProps({
	content: Object
})

</script>

<template lang="pug">

div(class="flex gap-4 -mx-12 px-12 overflow-x-scroll no-scrollbar")
	div(v-for="item in content")
		router-link(
			:to="{ name: 'tipo-id', params: { id: item.id } }"
			class="border border-gray-300 rounded-xl font-medium flex flex-1 flex-grow w-44 h-32 items-end pb-4 px-4 tracking-tight leading-5"
			) {{ item.name }}

</template>