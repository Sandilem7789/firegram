import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore"

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAA_9FPWvEwZWduZ5BdnH_sy8A-z9FDsFI",
    authDomain: "tgs-firegram.firebaseapp.com",
    projectId: "tgs-firegram",
    storageBucket: "tgs-firegram.appspot.com",
    messagingSenderId: "34173730201",
    appId: "1:34173730201:web:df3e4def1c50a6bf752708"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //constants that we call to get hold of storage and fire store
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export { projectStorage, projectFirestore };
  