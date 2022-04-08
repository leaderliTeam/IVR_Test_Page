import LayOut from '@/components/layout/index.vue';

export default {
    path: '/demo',
    name: 'demo',
    component: LayOut,
    meta: {
        title: '示例',
        icon: 'Box'
    },
    children: [
        {
            path: '/highlightjs',
            name: 'highlightjs',
            component: () => import('@/views/demo/highlightjs.vue'),
            meta: {
                title: '高亮',
                icon: 'MagicStick'
            }
        },
        {
            path: '/nprogress',
            name: 'nprogress',
            component: () => import('@/views/demo/NProgress.vue'),
            meta: {
                title: '进度条',
                icon: 'Refresh'
            }
        },
        {
            path: '/fusejs',
            name: 'fusejs',
            component: () => import('@/views/demo/fusejs.vue'),
            meta: {
                title: '模糊搜索',
                icon: 'Search'
            }
        },
        {
            path: '/icon',
            name: 'icon',
            component: () => import('@/views/demo/icon.vue'),
            meta: {
                title: '图标',
                icon: 'li-fi-rr-grid'
            }
        },
        {
            path: '/excel',
            name: 'excel',
            component: () => import('@/views/demo/excel.vue'),
            meta: {
                title: 'excel',
                icon: 'li-fi-rr-grid'
            }
        },
        {
            path: '/usermanage',
            name: '模糊查询',
            component: () => import('@/views/sysmanage/usermanage.vue'),
            meta: {
                title: '模糊查询',
                icon: 'Avatar'
            }
        },{
            path: '/download',
            name: '文件下载',
            component: () => import('@/views/sysmanage/download.vue'),
            meta: {
                title: '文件下载',
                icon: 'Download'
            }
        }
    ]
};
