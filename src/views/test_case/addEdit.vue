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
     <el-form-item label="序列" prop="caseDesc">
      <el-input
        placeholder="请输入内容"
        v-model="model.caseDesc"
        clearable
      />
    </el-form-item>
     <el-form-item label="预期结果规则校验" prop="caseDesc">
      <el-input
        placeholder="请输入内容"
        v-model="model.caseDesc"
        clearable
      />
    </el-form-item>
     <el-form-item label="是否弃用" prop="caseDesc">
      <el-input
        placeholder="请输入内容"
        v-model="model.caseDesc"
        clearable
      />
    </el-form-item>
       <el-form-item label="关联的需求编号" prop="caseDesc">
      <el-input
        placeholder="请输入内容"
        v-model="model.caseDesc"
        clearable
      />
    </el-form-item>
       <el-form-item label="测试负责人" prop="caseDesc">
      <el-input
        placeholder="请输入内容"
        v-model="model.caseDesc"
        clearable
      />
    </el-form-item>
       <el-form-item label="开发负责人" prop="caseDesc">
      <el-input
        placeholder="请输入内容"
        v-model="model.caseDesc"
        clearable
      />
    </el-form-item>
       <el-form-item label="前置测试案例编号" prop="caseDesc">
      <el-input
        placeholder="请输入内容"
        v-model="model.caseDesc"
        clearable
      />
    </el-form-item>
       <el-form-item label="编辑状态" prop="caseDesc">
      <el-input
        placeholder="请输入内容"
        v-model="model.caseDesc"
        clearable
      />
    </el-form-item>
     <el-form-item label="添加标签" prop="caseDesc">
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