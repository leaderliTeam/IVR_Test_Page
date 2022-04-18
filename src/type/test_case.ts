import type { FormInstance } from 'element-plus'
import { ref } from 'vue';

// 测试案例字段
export interface TestCaseInt {
    id:string,
    caseDesc:string,
    inputSeq:string,
    expResultRule:string,
    used:string,
    reqId:string,
    tester:string,
    developer:string,
    frontCaseId:string,
    executeNum:string,
    lastExecuteTime:string,
    editState:string,
    tag:string
}


// 搜索框查询字段
export interface SelectFormInt {
    caseDesc:string,
    page:number,
    count:number
}


export class TestCaseInitData {
    tableList : [TestCaseInt][] = []
    selectForm : SelectFormInt = {
        caseDesc:'',
        page:0,
        count:0
    }
    dataList:TestCaseInt[] = []
    addEditForm : TestCaseInt = {
        id:'',
        caseDesc:'',
        inputSeq:'',
        expResultRule:'',
        used:'',
        reqId:'',
        tester:'',
        developer:'',
        frontCaseId:'',
        executeNum:'',
        lastExecuteTime:'',
        editState:'',
        tag:''
    }
    addEditFormRef = ref<FormInstance>() 
    addEditDialog =ref(false)
}