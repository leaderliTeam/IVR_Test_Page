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

export const testCaseDelete = (ids:string[]) => {
    return axios({
        path:'/testCase/delete',
        method:'delete',
        ids
    });
};


export const optionTag = () => {
    return axios({
        path:'/testCase/queryTags',
        method:'get'
    });
};