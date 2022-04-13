import axios from '@/util/request';

export const testCaseList = () => {
    return axios({
        url:'/api/testCase/queryList',
        method:'get',
    });
};