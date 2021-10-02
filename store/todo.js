import { getData, doneTask, removeTask, addTask } from '@/service/todo'
// import { editTask } from '@/helpers/todo'

export const state = () => ({
  todoList: [],
})

export const getters = {
  getTodoList: (state) => {
    return state.todoList
  },
}

export const mutations = {
  SET_TODO_LIST(state, list) {
    state.todoList = list.slice()
  },
  MODIFY_TASK(state, id) {
    const index = state.todoList.findIndex(task => task.id === id)
    state.todoList[index].done = true
  },
  REMOVE_TASK(state, list) {
    state.todoList = list
  },
}

export const actions = {
  async getTodoList({ commit }) {
    // Problema con las mutaciones, solución hacer una copia 
    // del objeto
    const list = JSON.parse(JSON.stringify(await getData())) 
    commit('SET_TODO_LIST', list)
  },
  async doneTask({ commit }, taskId) {
    await doneTask(taskId)
    commit('MODIFY_TASK', taskId)
  },
  async removeTask({ commit }, taskId) {
    commit('REMOVE_TASK', await removeTask(taskId))
  },
  async createTask({ commit }, task) {
    const list = JSON.parse(JSON.stringify(await addTask(task))) 
    commit('SET_TODO_LIST', list)
  },
}
