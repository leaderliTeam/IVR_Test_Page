import LayOut from '@/components/layout/index.vue';
const test_case_index = () => import('@/views/test_case/index.vue');
const test_case_add_edit = () => import('@/views/test_case/addEdit.vue');

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
            component: test_case_index,
            meta: {
                title: '测试案例管理'
            },
        },
        {
            path: '/add',
            name: '新增',
            component: test_case_add_edit,
            meta: {
                title: '新增'
            },
            hidden:true
        },
        {
            path: '/edit/:id',
            name: '编辑',
            component: test_case_add_edit,
            meta: {
                title: '编辑'
            },
            hidden:true
          
        }
    ]

}