import axios from '@/util/request';
export const loginApi = () => {
return axios({
path:'/variable_manage/new_case_variable_page'
});
};
export const upApi = (data:any) => {
return axios({
path:'/variable_manage/new_case_variable_page',
method:'POST',
data
});
};