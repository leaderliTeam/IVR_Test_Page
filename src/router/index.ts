import { Router, createRouter, createMemoryHistory, RouteRecordRaw } from 'vue-router';
import { IMenubar } from '@/type/layout';
import LayOut from '@/components/layout/index.vue';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const modules = import.meta.globEager('./modules/*.ts');
const demo: Array<IMenubar> = Object.keys(modules).map((path: string) => modules[path].default);


// console.log(demo);
export const allowRouter: Array<IMenubar> = [
    {
        name: '',
        path: '/',
        meta: {
            title: '首页',
            icon: 'HomeFilled'
        },
        component: LayOut,
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/test_case/index.vue'),
                meta: {
                    title: '首页',
                    icon: 'HomeFilled'
                }
            },
            {
                path: '/itema',
                name: 'itema',
                component: () => import('@/views/home/itema.vue'),
                meta: {
                    title: '首页',
                    icon: 'HomeFilled'
                }
            },
            {
                path: '/about',
                name: 'about',
                component: () => import('@/views/about/index.vue'),
                meta: {
                    title: '关于',
                    icon: 'Setting'
                }
            },
            {
                path: '/flow',
                name: 'flow',
                component: () => import('@/views/flow/index.vue'),
                meta: {
                    title: '流程',
                    icon: 'Connection'
                }
            }
        ]
    },
    ...demo,
    {
        path: '/404',
        name: '404',
        component: LayOut,
        meta: {
            title: '404',
            icon: 'Warning'
        },
        children: [
            {
                path: '/404',
                name: '404',
                component: () => import('@/views/404/index.vue'),
                meta: {
                    title: '404',
                    icon: 'Warning'
                }
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue'),
        meta: {
            title: 'login',
            icon: ''
        }
    },
    {
        path: '/jinscene',
        name: 'scene',
        component: LayOut,
        meta: {
            title: '菜单',
            icon: 'Setting'
        },
        children: [
            {
                path: '/jinscene',
                name: 'scene',
                component: () => import('@/views/scene/jinscene.vue'),
                meta: {
                    title: '菜单',
                    icon: 'Setting'
                }
            },
            {
                path: '/clipboard',
                name: 'clipboard',
                component: () => import('@/views/scene/clipboard.vue'),
                meta: {
                    title: 'clipboard',
                    icon: 'Setting'
                }
            },
            {
                path: '/uploading',
                name: 'upload',
                component: () => import('@/views/scene/uploading.vue'),
                meta: {
                    title: 'uploading',
                    icon: 'Setting'
                }
            }

        ]
    },
    {
        path: '/variable_manage',
        name: '变量管理',
        component: LayOut,
        meta: {
            title: '测试案例变量',
            icon: 'Operation'
        },
        children:[
            {
                path: '/variable_manage',
                name: '新增测试案例变量',
                component: () => import('@/views/variable_manage/new_case_variable_page.vue'),
                meta: {
                    title: '新增测试案例变量',
                    icon: 'Avatar'
                }
            },
            {
                path: '/variable_manage',
                name: '查询测试案例变量',
                component: () => import('@/views/variable_manage/query_case_variable_page.vue'),
                meta: {
                    title: '查询测试案例变量',
                    icon: 'Avatar'
                }
            }
        ]
    }
];

const router: Router = createRouter({
    history: createMemoryHistory(),
    routes: allowRouter as RouteRecordRaw[]
});

export default router;
