import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteMockServe } from 'vite-plugin-mock';
import viteSvgIcons from 'vite-plugin-svg-icons';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
    return {
        optimizeDeps:{
            entries:path.resolve(__dirname,'src')
        },
        plugins: [
            vue({
                template: {
                    compilerOptions: {
                        isCustomElement : (tag) => tag.startsWith('menubar-item')

                    }
                }
            }),
            viteMockServe({
                // default
                mockPath: 'mock',
                logger: false,
                localEnabled: command === 'serve'
            }),
            viteSvgIcons({
                // Specify the icon folder to be cached
                iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
                // Specify symbolId format
                symbolId: 'icon-li-[name]'
            })
        ],
        // 服务器配置
        server: {
            // 访问地址配置
            host: '0.0.0.0',
            // 端口
            port: 3000,
            // 是否使用https
            https: false,
            // 启动后自动打开浏览器
            open: false,

            // 代理配置，
            proxy: {
                '/api': {
                    url:'localhost:3000',
                    target: '',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, '')
                }
                // "/test": {
                // 	target: "http://centos7:10001",
                // 	rewrite: (path) => path.replace(/^\/test/, ""),
                // },
            },

            hmr: {
                // 是否屏蔽服务器保持
                overlay: false
            }
        },
        // 设置项目文件路径，以项目根目录文起点
        resolve: {
            // 设置项目文件路径的别名
            alias: [
                {
                    find: '@',
                    replacement: path.resolve(__dirname, './src')
                },
                {
                    find: '@antv/x6',
                    replacement: '@antv/x6/lib'
                },
                {
                    find: '@antv/x6-vue-shape',
                    replacement: '@antv/x6-vue-shape/lib'
                }

            ]
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/styles/global.scss";'
                }
            }
        }
    };
});
