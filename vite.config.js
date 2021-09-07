import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import path from 'path'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import WindiCSS from 'vite-plugin-windicss'

const config = defineConfig({
	base: process.env.NOVE_ENV === 'production' ? '/2021-gulacerta-app-vue/' : '/',
	plugins: [
		Vue(),
		Pages(),
		Layouts(),
		Components({
			directoryAsNamespace: true,
			resolvers: [
				IconsResolver({
					componentPrefix: '',
				})
			],
		}),
		Icons(),
		WindiCSS()
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		}
	}
})

export default config