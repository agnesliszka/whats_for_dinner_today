import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from "./routes/index";
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

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
