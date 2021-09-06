<script setup>

import { defineProps, reactive } from 'vue'

const props = defineProps({
	title: String,
	navback: Boolean,
})

</script>

<template lang="pug">

div(class="flex items-center space-x-6")
	nav-back(
		v-if="navback"
		class="flex"
		)
		mdi-arrow-left(class="w-8 h-8")
	h1 {{ title }}

</template>