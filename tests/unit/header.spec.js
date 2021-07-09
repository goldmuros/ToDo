import {mount, createLocalVue} from '@vue/test-utils';
import Element from 'element-ui';
import Header from '@/components/Header.vue';

const localVue = createLocalVue();
localVue.use(Element);

describe("Header component", () => {
  it('mount Header compoent', () => {
    const header = mount(Header, {localVue});

    expect(header.text()).toMatch('About');
  })
})