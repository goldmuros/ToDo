import { mount, createLocalVue  } from "@vue/test-utils";
import List from '@/components/activity/List.vue';
import Element from 'element-ui';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Element);

describe('List component', () => {
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      activityList: () => [{
        id: 1,
        name: 'todo',
        completed: false,
      }]
    };

    store = new Vuex.Store({
      getters,
    })
  });

  it('Exist component', () => {
    const cmp = mount(List, {store, localVue });

    expect(cmp.exists()).toBe(true);
  })
})