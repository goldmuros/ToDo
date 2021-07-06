<template>
  <el-table
    ref="multipleTable"
    :data="activities"
    style="width: 100%"
    :show-header="false"
    :empty-text="'No Items'"
  >
    <el-table-column property="completed" width="55"> 
      <template slot-scope="scope">
        <el-checkbox
          v-model="scope.row.completed"
          @change="edit(scope.row.id, scope.completed)"
        ></el-checkbox>
      </template>
    </el-table-column>
    <el-table-column property="name" width="120"> </el-table-column>
    <el-table-column align="right">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="removeActivity(scope.row.id)"
        >
          Delete
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({ activities: "activityList" }),
  },
  methods: {
    ...mapActions(["removeActivity", "editActivity"]),
    edit(id, check) {
      const payload = {
        id,
        completed: check
      };
      this.editActivity(payload);
    },
  },
};
</script>
