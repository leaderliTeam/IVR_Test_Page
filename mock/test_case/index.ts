// test.ts

import { MockMethod } from 'vite-plugin-mock';
export default [
    {
        url: '/testCase/queryList',
        method: 'get',
        response: () => {
            return {
                code: 0,
                msg: "success",
                pageSize: 0,
                currentPage: 0,
                totalPage: 0,
                totalCount: 0,
                'list|20': [{
                    'id|+1': 'IVRT2204020001',
                    caseDesc:'@csentence(10)',
                    inputSeq:'mock',
                    expResultRule:'mock',
                    used:'mock',
                    reqId:'mock',
                    tester:'mock',
                    developer:'mock',
                    frontCaseId:'mock',
                    executeNum:'mock',
                    lastExecuteTime:'mock',
                    editState:'mock',
                    tag:'mock'
                }]
            };
        }
    }
] as MockMethod[];
