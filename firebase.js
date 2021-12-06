// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOcyo0Wfg6tgoqBOcIG_ZhPblFT4LRKC8",
  authDomain: "cryptoapp-db8b9.firebaseapp.com",
  projectId: "cryptoapp-db8b9",
  storageBucket: "cryptoapp-db8b9.appspot.com",
  messagingSenderId: "701837393788",
  appId: "1:701837393788:web:f11fce22ef3f6aa25d6ef9"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth};