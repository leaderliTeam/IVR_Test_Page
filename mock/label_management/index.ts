// test.ts

import { MockMethod } from 'vite-plugin-mock';
export default [
    {
        url: '/LabelManagement/queryList',
        method: 'get',
        response: () => {
            return {
                code: 0,
                msg: 'success',
                pageSize: 0,
                currentPage: 0,
                totalPage: 0,
                totalCount: 0,
                'list|20': [{
                    'id|+1': 1,
                    used:'mock',
                    caseId:'mock',
                    executeId:'mock',
                    executeCount:'mock',
                    lastExecuteTime:'mock',
                    callId:'mock',
                    transMsg:'mock',
                    executeResult:'mock',
                    executeStatus:'mock'
                }]
            };
        }
    }
] as MockMethod[];
