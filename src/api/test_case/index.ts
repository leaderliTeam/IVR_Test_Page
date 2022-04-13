import axios from '@/util/request';

export const testCaseList = () => {
    return axios({
        path:'/api/testCase/queryList',
        method:'get',
    });
};