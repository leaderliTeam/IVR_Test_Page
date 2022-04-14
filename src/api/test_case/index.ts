import axios from '@/util/request';

export const testCaseList = (data:any) => {
    return axios({
        path:'/api/testCase/queryList',
        method:'get',
        data
    });
};