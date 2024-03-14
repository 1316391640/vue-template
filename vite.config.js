import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import eslintPlugin from 'vite-plugin-eslint';
import path from 'path'
export default defineConfig(({command})=>{
  return {
    plugins: [
      vue(),
      viteCommonjs({
        skipPreBuild: command === 'serve'
      }),
      eslintPlugin({
        include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue'],
      }),
    ],
    envDir: './.config',
    resolve:{
			alias:{
				'@':path.resolve(__dirname,'src')
			}
		},
    // css:{
    //   preprocessorOptions:{
    //     scss:{
    //       additionalData:'@import "@/assets/style/varable.scss";'
    //     }
    //   }
    // },
    build: {
			commonjsOptions: {
				transformMixedEsModules: true
			},
      sourcemap:true,
			chunkSizeWarningLimit: 1500, // 调整包的大小
			rollupOptions: {
				output: {
					// 最小化拆分包
					manualChunks (id) {
						if (id.includes('node_modules')) {
							return id.toString().split('node_modules/')[1].split('/')[0].toString()
						}
					},
					// 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
					entryFileNames: 'assets/js/[name].[hash].js', // 用于命名代码拆分时创建的共享块的输出命名
					chunkFileNames: 'assets/js/[name].[hash].js', // 用于输出静态资源的命名，[ext]表示文件扩展名
					assetFileNames: 'assets/[ext]/[name].[hash].[ext]'
				}
			},
			assetsInlineLimit: 1024*4,
		}
  }
})
