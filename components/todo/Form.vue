<template>
  <v-dialog v-model="dialog" color="white" width="500">
    <template #activator="{ on, attrs }">
      <v-btn dark v-bind="attrs" v-on="on"> Add Task </v-btn>
    </template>

    <v-card>
      <v-card-text>
        <v-row>
          <v-col col="6">
            <v-text-field v-model="taskName" label="Task" />
          </v-col>
          <v-col col="6">
            <v-select v-model="user" :items="userList" label="Users" />
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="add">add</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => {
    return {
      dialog: false,
      taskName: '',
      user: '',
      userList: ['Jose', 'Ramon', 'Agatha'],
    }
  },
  methods: {
    ...mapActions('todo' ,['createTask']),
    cleanForm() {
      this.taskName = ''
      this.user = ''
    },
    add() {
      const task = {
        name: this.taskName,
        user: this.user
      }
      this.createTask(task)
      this.cleanForm()
      this.dialog = false
    },
  },
}
</script>
