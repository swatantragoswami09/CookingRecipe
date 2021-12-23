import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFgnUrA5jlSlRVenfWsws2S2o6tQ3Fvv4",
  authDomain: "cooking-ninja-73e4e.firebaseapp.com",
  projectId: "cooking-ninja-73e4e",
  storageBucket: "cooking-ninja-73e4e.appspot.com",
  messagingSenderId: "843391574620",
  appId: "1:843391574620:web:7da9fe15b5af06b49afc99",
};

//   init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
