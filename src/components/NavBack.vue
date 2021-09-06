<template lang="pug">

a(
	@click="$router.go(-1)"
	class="cursor-pointer"
	)
	slot

</template>