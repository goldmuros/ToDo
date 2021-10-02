<template>
  <v-container>
    <TodoTask v-for="(task, index) in todoList" :key="index" :task="task" @done="done" @remove="remove"/>
  </v-container>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  computed: {
    todoList() {
      return {...this.$store.state.todo.todoList}
    }
  },
  methods: {
    ...mapActions('todo', ['doneTask', 'removeTask']),
    done(taskId) {
      this.doneTask(taskId)
    },
    remove(taskId) {
      this.removeTask(taskId)
    }
  }
}
</script>
