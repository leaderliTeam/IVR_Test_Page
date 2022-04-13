import { MockMethod } from 'vite-plugin-mock';
export default [
    {
        url: '/api/variable_manage/query_case_variable_page',
        method: 'get',
        response: () => {
            return {
                code: 0,
                'list|10': [{
                    'id|+1': 'IVRT2204020001',
                    variableCode:'卡号',
                    variableValue:'123456789',
                    desc:'卡号'

                }]
            };
        }
    }
] as MockMethod[];