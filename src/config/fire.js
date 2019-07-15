import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAC_XLCN4KglG9Ku1nci0712SMXr7IQZgs",
    authDomain: "n57-weather-app.firebaseapp.com",
    databaseURL: "https://n57-weather-app.firebaseio.com",
    projectId: "n57-weather-app",
    storageBucket: "",
    messagingSenderId: "822773488159",
    appId: "1:822773488159:web:8fbabf3395773ed4"
  };

const FireBs = firebase.initializeApp(firebaseConfig);
export default FireBs;