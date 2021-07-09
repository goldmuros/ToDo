import { mount, createLocalVue } from "@vue/test-utils";
import Element from 'element-ui';
import Add from "../../src/components/activity/Add.vue";

const localVue = createLocalVue();
localVue.use(Element);

describe("Add component", () => {
  it("Exist component", async () => {
    const cmp = mount(Add, {localVue});

    expect(cmp.exists()).toBe(true);
  });

  //TODO make test method add
});
