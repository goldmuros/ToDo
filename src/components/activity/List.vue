<template>
  <el-table
    ref="multipleTable"
    :data="activities"
    style="width: 100%"
    :show-header="true"
    :empty-text="'No Items'"
    @selection-change="edit"
  >
    <el-table-column property="completed" width="40">
      <template slot-scope="scope">
        <el-checkbox
          v-model="scope.row.completed"
          @change="edit(scope.row.id, scope.row.completed)"
        />
      </template>
    </el-table-column>
    <el-table-column
      property="name"
      label="Name"
      sortable
    ></el-table-column>
    <el-table-column align="right">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="removeActivity(scope.row.id)"
        >
          X
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "List",
  computed: {
    ...mapGetters({ activities: "activityList" }),
  },
  methods: {
    ...mapActions(["removeActivity", "editActivity"]),
    edit(id, check) {
      const payload = {
        id,
        completed: check,
      };
      this.editActivity(payload);
    },
  },
};
</script>
