<template>

    <div class='icons-container'>

        <div class='grid'>
            <div
                v-for='item of icons'
                :key='item'
            >

                <li-icon
                    :name='item'
                    class='svg-icon'
                />
                <span>{{ item }}</span>
            </div>
        </div>
        <div />
    </div>
</template>

<script lang="ts" setup>

import LiIcon from '@/components/li-icon/index.vue';

import icons from '@/icons/index';


</script>


<style lang="scss" scoped>
.icons-container {
  margin: 10px 20px 0;
  overflow: hidden;

  .grid {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }


  .svg-icon {
    margin: 20px;

    color: green;
    width: 100px;
    height: 2em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  span {
    display: block;
    font-size: 16px;
    text-align: center;
    overflow: hidden;

    margin-top: 10px;
  }

  .disabled {
    pointer-events: none;
  }
}
</style>
