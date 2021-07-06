<template>
  <el-row>
    <el-col :span="21">
      <el-input
        placeholder="Create Vue.js project"
        v-model="input"
        clearable
      ></el-input>
    </el-col>
    <el-col :span="3" style="padding-left: 15px">
      <el-button
        type="primary"
        :disabled="disableAddButton"
        @click="add"
      >
        Add
      </el-button>
    </el-col>
  </el-row>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "Add",
  data() {
    return {
      input: "",
    };
  },
  computed: {
    disableAddButton() {
      return this.input.length === 0 ? true : false;
    },
  },
  methods: {
    ...mapActions(['addActivity']),
    add() {
      this.addActivity(this.input);
      this.input = '';
    },
  },
};
</script>
