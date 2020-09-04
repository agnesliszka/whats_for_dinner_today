import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '@/main'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dishes: []
  },
  mutations: {
    setDishes: (state, dishes) => {
      state.dishes = dishes
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
    }
  }
})
