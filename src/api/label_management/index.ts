import axios from '@/util/request';

export const LabelManagementList = (data:any) => {
    return axios({
        path:'/LabelManagement/queryList',
        method:'get',
        data
    });
};


