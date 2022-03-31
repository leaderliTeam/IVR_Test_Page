<template>
    <h2>{{ msg }}</h2>
</template>

<script setup lang='ts'>
import {defineComponent, onMounted} from 'vue';

// const props = defineProps({
//
//     msg:{
//         type:String
//     }
// }
// );

const props = defineProps<{
    msg: string
}>();



const emit = defineEmits(['update:msg']);


onMounted(() => {

    console.log('emit');
    emit('update:msg','123123');
});

</script>

<style scoped lang='scss'>
</style>
