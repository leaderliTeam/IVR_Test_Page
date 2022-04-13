<template>
  <el-form
    class="form"
    :model="model"
    :rules="rules"
    ref="form"
    label-width="88px"
  >
    <el-form-item label="案例描述" prop="caseDesc">
      <el-input
        placeholder="请输入内容"
        v-model="model.caseDesc"
        clearable
      />
    </el-form-item>
   
    <el-form-item>
      <el-button type="primary" @click="submit">
        提交
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang='ts'>
import { reactive } from 'vue';
const form = reactive({
  caseDesc:''
});
</script>