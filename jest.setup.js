/* eslint-disable @typescript-eslint/no-var-requires */
const { createTestingPinia } = require('@pinia/testing');

const { config } = require('@vue/test-utils');

config.global.stubs = {};
config.global.plugins = [createTestingPinia()]; //vue组件的全局配置文件

process.addListener('unhandledRejection', (err) => console.error(err));
