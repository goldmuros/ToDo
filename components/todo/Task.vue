<template>
  <v-row align-content="center">
    <v-col align-self="center" :cols="8">
      <v-card>
        <v-card-subtitle>
          <v-row align-content="center">
            <v-col align-self="center" :cols="6">{{ task.name }}</v-col>
            <v-col align-self="center" :cols="6">{{ task.user }}</v-col>
          </v-row>
        </v-card-subtitle>
      </v-card>
    </v-col>
    <v-col align-self="center" :cols="4">
      <v-btn
        icon
        :disabled="task.done"
        color="pink"
        elevation="13"
        @click="$emit('done', task.id)"
      >
        <v-icon>mdi-checkbox-marked-outline</v-icon>
      </v-btn>
      <v-btn icon elevation="13" @click="$emit('remove', task.id)">
        <v-icon>mdi-trash-can-outline</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
}
</script>
