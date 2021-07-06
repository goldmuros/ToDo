import Vue from 'vue'
import Vuex from 'vuex'

import {add, fetch, remove, edit} from '../services/activities';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list_activity: []
  },
  getters: {
    activityList: state => state.list_activity
  },
  mutations: {
    'FETCH_ACTIVITIES'(state, activities) {
      state.list_activity = activities;
    },
    'ADD_ACTIVITY'(state, activity) {
      state.list_activity.push(activity)
    },
    'REMOVE_ACTIVITY'(state, id) {

      state.list_activity = state.list_activity.filter(activity => activity.id !== id)
    },
    'EDIT_ACTIVITY'(state, payload) {
      state.list_activity = state.list_activity.map(activity => {
        if (activity.id === payload.id)
          activity.completed = payload.completed;

        return activity;
      })
    }
  },
  actions: {
    async fetchActivities({commit}) {
      const activities = await fetch();
      commit('FETCH_ACTIVITIES', activities);
    },
    async addActivity({commit}, payload) {
      const newActivity = await add(payload);
      commit('ADD_ACTIVITY', newActivity)
    },
    async removeActivity({commit}, id) {
      await remove(id);
      commit('REMOVE_ACTIVITY', id)
    },
    async editActivity({commit}, payload) {
      await edit(payload)
      commit('EDIT_ACTIVITY', payload)
    }
  },
})
