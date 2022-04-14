<template>
  <el-form
    class="addEditForm"
    :model="addEditForm"
    :rules="rules"
    ref="addEditFormRef"
    label-width="150px"
  >
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
      <el-form-item>
      <el-button type="primary" @click="submitForm(addEditFormRef)">
        提交
      </el-button>
      <el-button plain @click="submitClose()">
        取消
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang='ts'>
import { reactive , ref } from 'vue';
import { testCaseAddData } from '@/type/test_case';
import type { FormInstance } from 'element-plus';

const addEditForm = reactive( new testCaseAddData() );
const addEditFormRef = ref<FormInstance>();

const submitForm = ( addEditFormRef : FormInstance | undefined ) =>{

    if (!addEditFormRef) return  
    addEditFormRef.validate((valid) => {
      if (valid) {
        console.log('submit!')
      } else {
        console.log('error submit!')
        return false
      }
  })

}

const rules = {

}
</script>