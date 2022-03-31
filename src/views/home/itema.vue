<template>
    <h5>{{ msg }}</h5>
    <itemb v-model:msg='msg' />
</template>

<script setup lang='ts'>
import itemb from '@/views/home/itemb.vue';
import { ref } from 'vue';
const msg = ref('text');
</script>

<style scoped lang='scss'>
</style>
