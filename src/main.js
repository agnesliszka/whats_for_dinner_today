import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from "firebase"
import VueTextareaAutosize from 'vue-textarea-autosize'

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyCEFlvJpevdNbuwBEjIdvtGZyjtRtL6pzU",
    authDomain: "whats-for-dinner-today.firebaseapp.com",
    databaseURL: "https://whats-for-dinner-today.firebaseio.com",
    projectId: "whats-for-dinner-today",
    storageBucket: "whats-for-dinner-today.appspot.com",
    messagingSenderId: "887802931593",
    appId: "1:887802931593:web:9f9198fc439708c9489958"
});

export const db = firebase.firestore()

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
