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
                        <el-form-item label='编号'>
                            <el-input
                                placeholder='请输入内容'
                                size='mini'
                                clearable
                                style='width:200px'
                            />
                        </el-form-item>
                    </el-col>
                    <el-col :span='2'>
                        <el-form-item>
                            <el-button
                                type='primary'
                                size='mini'
                                icon='Search'
                            >
                                搜索
                            </el-button>
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
                >新增</el-button>
            </el-row>
        </div>
        <!-- 表格部分 -->
        <div>
            <el-table
                :data='list'
                border
                highlight-current-row
            >
                <el-table-column
                    width='80'
                    label='ID'
                    prop='id'
                    align='center'
                />
                <el-table-column
                    label='场景编号'
                    prop='username'
                    align='center'
                />
                <el-table-column
                    label='场景名称'
                    prop='age'
                    align='center'
                />
                <el-table-column
                    label='场景类型'
                    prop='description'
                    align='center'
                />
                <el-table-column
                    label='场景类别'
                    prop='email'
                    align='center'
                />
                <el-table-column
                    label='个性化播报'
                    prop='date'
                    align='center'
                />
                <el-table-column
                    label='启用标识'
                    prop='date'
                    align='center'
                />
                <el-table-column
                    label='审批状态'
                    prop='date'
                    align='center'
                />
                <el-table-column
                    label='备注'
                    prop='date'
                    align='center'
                />
                <el-table-column
                    label='操作'
                    align='center'
                    width='200'
                >
                   
                    <el-link
                        type='info'
                    >详情</el-link>
                    <el-link>当前场景</el-link>
                    <el-link type='primary'>编辑</el-link>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script setup lang='ts'>
import { reactive } from 'vue';
import axios from 'axios';
const list:any = reactive([]);

axios.get('/api/scene').then(res => {
    if(res.data.list.length > 0) {
        let i:number;
        for(i = 0; i < res.data.list.length; i++) {
            list.push(res.data.list[i]);
        }   
    }   
});

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