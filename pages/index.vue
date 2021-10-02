<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="12" >
        <v-card>
          <v-card-title>TO-DO</v-card-title>
          <v-card-text>
            <TodoList />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align-content="center">
      <v-col cols="12">
      <TodoForm />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  created() {
    this.getTodoList()
  },
  methods: {
    ...mapActions('todo', ['getTodoList']),
  },
}
</script>
