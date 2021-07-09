<template>
  <el-row type="flex" justify="center" :gutter="20">
    <el-col :span="12">
      <el-card class="box-card">
        <div slot="header">
          <Add />
        </div>
        <div>
          <List />
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { mapActions } from 'vuex';
import Add from '../components/activity/Add.vue';
import List from '../components/activity/List.vue';

export default {
  name: "Home",
  components: {
    Add,
    List
  },
  methods: {
    ...mapActions(['fetchActivities']),
  },
  created() {
    this.fetchActivities();
  }
};
</script>
