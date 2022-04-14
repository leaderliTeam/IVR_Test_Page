import type { FormInstance } from 'element-plus'
import { ref } from 'vue';
export interface testCaseAddForm {
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

export class  testCaseAddData {
    addEditForm : testCaseAddForm = {
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

    addEditFormRef = ref<FormInstance>();
}