import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

<<<<<<< HEAD
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, 'src/assets')
  //   },
  // },
})
=======
// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
		vue(),
		vuetify({ autoImport: true }),
	],
	server: {
		host: 'localhost',
		port: 6999
	  },
})

>>>>>>> dev
