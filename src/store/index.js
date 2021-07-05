import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list_activity: []
  },
  getters: {
    activityList: state => state.list_activity
  },
  mutations: {
    'ADD_ACTIVITY'(state, payload) {
      state.list_activity.push({
        'name': payload,
        'completed': false
      })
    },
    'REMOVE_ACTIVITY'(state, payload) {
      state.list_activity = state.list_activity.filter(activity => activity.name !== payload)
    },
    'EDIT_ACTIVITY'(state, payload) {
      state.list_activity[payload.index].completed = payload.check;
    }
  },
  actions: {
    addActivity({commit}, payload) {
      // TODO call service add list and firebase
      commit('ADD_ACTIVITY', payload)
    },
    removeActivity({commit}, name) {
      commit('REMOVE_ACTIVITY', name)
    },
    editActivity({commit}, payload) {
      commit('EDIT_ACTIVITY', payload)
    }
  },
})
