<template>
    <div class='app-container'>
          <div class='layui-ellem-quote'>
            测试案例管理
        </div>
        <!-- 搜索部分 -->
        <div class='select-box'>
            <el-form :model="selectForm">
                <el-row>
                    <el-col :span='8'>
                        <el-form-item >
                            <el-input
                                placeholder='案例描述'
                                size='mini'
                                clearable
                                style='width:200px'
                                v-model = 'selectForm.caseDesc' 
                            />
                            <el-button size='mini' :icon="Search" type="primary" @click="searchSubmit">搜索</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>

         <div class='layui-ellem-quote'>
            <span>测试案例列表</span>
            <el-row style='float:right'>
                <el-button
                    size='mini'
                    icon='Plus'
                    type='primary'
                    plain
                    @click='addEdit' 
                >新增</el-button>
                <el-button
                    size='mini'
                    icon='Plus'
                    type='primary'
                    plain
                >执行案例绑定</el-button>
                  <el-button
                    size='mini'
                    icon='Plus'
                    type='primary'
                    plain
                >查看关联执行案例</el-button>
                
                 <el-button
                    size='mini'
                    icon='CloseBold'
                    type='danger'
                    plain
                >批量删除</el-button>
            </el-row>
        </div>

        <!-- 表格部分 -->
        <div>
             <el-table :data="tableList[selectForm.page]" style="width: 100%" size="small" stripe="true" border >
                <el-table-column type="selection" width="40" />
                <el-table-column fixed prop="id" label="编号" width="150" />
                <el-table-column prop="caseDesc" label="案例描述" width="200" />
                <el-table-column prop="inputSeq" label="输入序列" width="150" />
                <el-table-column prop="expResultRule" label="预期结果规则校验" width="150" />
                <el-table-column prop="used" label="是否弃用" width="150" />
                <el-table-column prop="reqId" label="关联的需求编号" width="150" />
                <el-table-column prop="tester" label="测试负责人" width="150" />
                <el-table-column prop="developer" label="开发负责人" width="150" />
                <el-table-column prop="frontCaseId" label="前置测试案例编号" width="150" />
                <el-table-column prop="executeNum" label="执行次数" width="150" />
                <el-table-column prop="lastExecuteTime" label="最后执行时间" width="150" />
                <el-table-column prop="editState" label="编辑状态" width="150" />
                <el-table-column fixed="right" label="操作" width="260">
                    <template #default="scope">
                        <el-button type="primary" size="small">预期结果规则</el-button>
                        <el-button type="primary" size="small" @click="addEdit">编辑</el-button>
                        <el-button type="danger" size="small">删除</el-button>
                    </template>
                </el-table-column>
             </el-table>
        </div>
        <el-pagination @current-change="currentChange" layout="prev, pager, next" :total="selectForm.count" />
    </div>

    <el-dialog v-model="addEditDialog"  width="600px" title="提示" >
        <!-- <span slot="title">
            <span >{{(addEditForm.id ? '编辑':'新增')}}</span>
        </span> -->
        <el-form 
            :model="addEditForm" 
            class="addEditForm"
            :rules="rules"
            ref="addEditFormRef"
            label-width="150px">

            <el-form-item label="案例描述" prop="caseDesc">
            <el-input
                placeholder="请输入内容"
                v-model="addEditForm.caseDesc"
                clearable
            />
            </el-form-item>
            <el-form-item label="输入序列" prop="inputSeq">
            <el-input
                placeholder="请输入内容"
                v-model="addEditForm.inputSeq"
                clearable
            />
            </el-form-item>
                <el-form-item label="预期结果规则校验" prop="inputSeq">
            <el-input
                placeholder="请输入内容"
                v-model="addEditForm.inputSeq"
                clearable
            />
            </el-form-item>
                <el-form-item label="是否弃用" prop="used">
            <el-input
                placeholder="请输入内容"
                v-model="addEditForm.used"
                clearable
            />
            </el-form-item>
                <el-form-item label="关联的需求编号" prop="reqId">
            <el-input
                placeholder="请输入内容"
                v-model="addEditForm.reqId"
                clearable
            />
            </el-form-item>
                <el-form-item label="测试负责人" prop="tester">
            <el-input
                placeholder="请输入内容"
                v-model="addEditForm.tester"
                clearable
            />
            </el-form-item>
                <el-form-item label="开发负责人" prop="developer">
            <el-input
                placeholder="请输入内容"
                v-model="addEditForm.developer"
                clearable
            />
            </el-form-item>
                <el-form-item label="前置测试案例编号" prop="frontCaseId">
            <el-input
                placeholder="请输入内容"
                v-model="addEditForm.frontCaseId"
                clearable
            />
            </el-form-item>
                <el-form-item label="添加标签" prop="tag">
            <el-input
                placeholder="请输入内容"
                v-model="addEditForm.tag"
                clearable
            />
            </el-form-item>
        </el-form>
        <template #footer>
        <span class="dialog-footer">
            <el-button @click="addEditDialog = false">取消</el-button>
            <el-button type="primary" @click="submitForm(addEditFormRef)">保存</el-button
            >
        </span>
        </template>
    </el-dialog>

</template>


<script setup lang='ts'>
    import { reactive,onMounted,ref,toRefs} from 'vue';
    import axios from 'axios';
    import { testCaseList } from '@/api/test_case/index.ts';
    import { TestCaseInitData,TestCaseInt } from '@/type/test_case';
    import { useRouter } from 'vue-router';
    import type { FormInstance } from 'element-plus';
    const router = useRouter();

    let data:any = reactive(new TestCaseInitData());

    let {selectForm,addEditForm,addEditFormRef,addEditDialog,tableList,dataList} = toRefs(data);

    testCaseList({page:selectForm.page}).then(res => { 
        selectForm.value.count = res.list.length
        dataList = res.list
        selectList(res.list)
    });
    
    const selectList = (arr:TestCaseInt[])=>{
        tableList.value=[]
        for(let index=0;index<arr.length;index+=10){
            let list:any = arr.slice(index,index+10)
            tableList.value.push(list)
            console.log(tableList);
        }
    }

    const searchSubmit = () =>{
        
        let arr:TestCaseInt[]=[]
        if(selectForm.caseDesc){
            arr = dataList.filter(v=>v.caseDesc.indexOf(selectForm.caseDesc)!=-1)
        }else{
            arr = dataList
        }
        selectForm.value.count = arr.length
        // console.log(arr);
        selectList(arr)
    }

    const currentChange = (page:number)=>{
        selectForm.value.page = page-1
    }
 
    const addEdit = ()=>{
        addEditDialog.value = true
    }

    const submitForm =(addEditFormRef : FormInstance | undefined) =>{
        if (!addEditFormRef) return  
        addEditFormRef.validate((valid) => {
            if (valid) {
                alert('submit!')
                testCaseAdd()
            } else {
               alert('fail!')
                return false
        }
        })
    }
</script>

<style scoped lang='scss'>
.layui-ellem-quote{
    margin-bottom: 10px;
    padding: 15px;
    line-height: 22px;
    border-left: 5px solid #409eff;
    border-radius: 0 2px 2px 0;
    background-color: #f2f2f2;
}
.searchbtn{
    margin: 25px;
}
.el-link{
    margin-right: 10px;
}
.header-title{
    padding-top: 20px;
}
</style>