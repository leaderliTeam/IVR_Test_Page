import LayOut from '@/components/layout/index.vue';

export default {
    path: '/test_case',
    name: '测试案例',
    component: LayOut,
    meta: {
        title: '测试案例',
        icon: 'Operation'
    },
    children: [
        {
            path: '/test_case',
            name: '测试案例管理',
            component: () => import('@/views/test_case/test_case_page.vue'),
            meta: {
                title: '测试案例管理',
                icon: 'Avatar'
            },
        },
        {
            path: 'add',
            name: '新增',
            component: () => import('@/views/test_case/add.vue'),
            meta: {
                title: '新增',
                icon:''
            },
            hidden:true
        },
        {
            path: 'edit/:id',
            name: '编辑',
            component: () => import('@/views/test_case/add.vue'),
            meta: {
                title: '编辑',
                icon:''
            },
            hidden:true
          
        }
    ]

}