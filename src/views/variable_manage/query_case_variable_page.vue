<template>
    <div class='app-container'>
        <div class='layui-ellem-quote'>
           查询案例变量
        </div>
        <!-- 搜索部分 -->
        <div class='searchform'>
            <el-form>
                <el-row>
                    <el-col :span='8'>
                        <el-form-item label='卡号：'>
                            <el-input
                                placeholder='请输入内容'
                                size='mini'
                                clearable
                                style='width:200px'
                            />
                            <el-button size='mini' :icon="Search" type="primary">查询</el-button>
                        </el-form-item>
                    </el-col>

                </el-row>
            </el-form>
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
                    label='变量名'
                    prop='username'
                    align='center'
                />

                <el-table-column
                    label='操作'
                    align='center'
                    width='200'
                >

                    <el-link type='primary'>编辑</el-link>
                    <el-link>删除</el-link>
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