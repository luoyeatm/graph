import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';
import path from "path";


// https://vitejs.dev/config/
export default defineConfig({
  base: "/cfd",
  resolve: {
    // 配置目录别名
    alias: {
      "@": path.resolve(__dirname, "src"),
      "components": path.resolve(__dirname, "src/components"),
      "views": path.resolve(__dirname, "src/views"),
      "utils": path.resolve(__dirname, "src/utils"),
      "api": path.resolve(__dirname, "src/api"),
      "typings": path.resolve(__dirname, "src/typings"),
    }
  },
  server: {

    host: "127.0.0.1",
    port: 9800,
    open: true,//自动打开浏览器
    proxy: {
      '/api': {
        target: "http://10.168.1.204:8989/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        // additionalData: `@import "${path.resolve(__dirname, 'src/assets//styles/common.less')}"`
      }
    }
  },
//   css:{
//     loaderOptions:{
//         less:{
//             javascriptEnabled:true,//允许链式调用的换行
//         }
//    }
// }
  plugins: [

    vue(),
    
    styleImport({
      libs: [{
        libraryName: 'ant-design-vue',
        // esModule: true,
        resolveStyle: (name) => {
          return `ant-design-vue/es/${name}/style/`;
        },
      }]
    })
  ]
})
