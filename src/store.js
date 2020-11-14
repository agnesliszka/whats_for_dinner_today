import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '@/main'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dishes: [],
    user: {
      loggedIn: false,
      data: null
    }
  },
  getters: {
    user(state){
      return state.user
    }
  },

  mutations: {
    setDishes: (state, dishes) => {
      state.dishes = dishes
    },
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    }
  },

  actions: {
    setDishes: async context => {
      let snapshot = await db.collection('dishes').get()
      const dishes = []
      snapshot.forEach(doc => {
        let appData = doc.data()
        appData.id = doc.id
        dishes.push(appData)
      })
      context.commit('setDishes', dishes)
    },
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email
        });
      } else {
        commit("SET_USER", null);
      }
    }

  }
})
