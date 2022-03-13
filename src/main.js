import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import vuetify from './plugins/vuetify'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCV16RGhPHOBPPvnQuHiccCs1un98lT8c",
  authDomain: "seat-99688.firebaseapp.com",
  projectId: "seat-99688",
  storageBucket: "seat-99688.appspot.com",
  messagingSenderId: "987064389076",
  appId: "1:987064389076:web:7d0aa994cba6bbb6e5da41",
  measurementId: "G-LHV516H0P1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
