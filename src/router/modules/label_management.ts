import LayOut from '@/components/layout/index.vue';
const label_management_index = () => import('@/views/label_management/index.vue');
const test_case_add_edit = () => import('@/views/test_case/addEdit.vue');

export default {
    path: '/label_management',
    name: '标签管理',
    component: LayOut,
    meta: {
        title: '标签管理',
        icon: 'Operation'
    },
    children: [
        {
            path: '/label_management',
            name: '标签管理',
            component: label_management_index,
            meta: {
                title: '标签管理'
            }
        }
    ]

};