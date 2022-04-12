<template>
    <div class='app-container'>
          <div class='layui-ellem-quote'>
            测试案例管理
        </div>
        <!-- 搜索部分 -->
        <div class='searchform'>
            <el-form>
                <el-row>
                    <el-col :span='8'>
                        <el-form-item >
                            <el-input
                                placeholder='请输入内容'
                                size='mini'
                                clearable
                                style='width:200px'
                            />
                            <el-button size='mini' :icon="Search" type="primary">搜索</el-button>
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
                    @click="$router.push('/test_case/add')"
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
             <el-table :data="tableData" style="width: 100%" size="small" stripe="true" border >
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
                    <template #default>
                         <el-button type="primary" size="small">预期结果规则</el-button>
                        <el-button type="primary" size="small">编辑</el-button>
                        <el-button type="danger" size="small">删除</el-button>
                    </template>
                </el-table-column>
             </el-table>
        </div>
       
    </div>
</template>


<script setup lang='ts'>
import { reactive } from 'vue';
import axios from 'axios';


// 数据表格
const tableData:any = reactive([]);
// 查询
axios.get('/api/test_case_page').then(res => {
    if(res.data.list.length > 0) {
        let i:number;
        for(i = 0; i < res.data.list.length; i++) {
            tableData.push(res.data.list[i]);
        }   
    }   
});
// 新增
const addData  = () => {

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
</style>