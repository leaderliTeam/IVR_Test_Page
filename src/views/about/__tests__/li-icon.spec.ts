import { mount } from '@vue/test-utils';

import about from '../index.vue';

test('displays message', () => {
    const wrapper = mount(about, {

        // 可以覆盖jest.setup.js中设置的全局的属性
        //例如 global.plugins = [createTestingPinia()]; //vue组件的全局配置文件
    });
    expect(wrapper.text()).toContain('暖的像火炉的暖男');
    expect(wrapper.text()).toContain('1110');
});
