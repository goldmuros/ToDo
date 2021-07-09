<template>
  <el-row type="flex" justify="center" :gutter="10">
    <el-col :xs="10" :sm="15" :md="20">
      <el-input
        placeholder="Create Vue.js project"
        v-model="input"
        clearable
      ></el-input>
    </el-col>
    <el-col :xs="4" :sm="4" :md="4">
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
