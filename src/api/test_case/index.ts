import axios from '@/util/request';

export const testCaseList = (data:any) => {
    return axios({
        path:'/testCase/queryList',
        method:'get',
        data
    });
};


export const testCaseAdd = (data:any) => {
    return axios({
        path:'/testCase/add',
        method:'post',
        data
    });
};