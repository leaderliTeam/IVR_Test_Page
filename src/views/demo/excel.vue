<template>
    <v-grid
        :source='rows'
        :columns='columns'
    />

</template>

<script lang="ts" setup>
import VGrid from '@revolist/vue3-datagrid';

const columns = [
    { prop: 'name', name: 'First' },
    { prop: 'details', name: 'Second' }
];
const rows = [{ name: '1', details: 'Item 1' }];

</script>

<style scoped>

</style>
