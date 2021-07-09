import { mount, createLocalVue  } from "@vue/test-utils";
import List from '@/components/activity/List.vue';
import Element from 'element-ui';

const localVue = createLocalVue();
localVue.use(Element);

describe('List component', () => {
  it('Exist component', () => {
    const cmp = mount(List, {localVue });

    expect(cmp.exists()).toBe(true);
  })

  //TODO make test for edit and removeActivity action
})