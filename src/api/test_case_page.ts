import axios from '@/util/request';
export const loginApi = () => {
    return axios({
        path:'/test_case_page'
    });
};
export const upApi = (data:any) => {
    return axios({
        path:'/test_case_page',
        method:'POST',
        data
    });
};