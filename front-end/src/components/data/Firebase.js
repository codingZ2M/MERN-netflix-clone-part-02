
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC_9qsM07BaTbJ2m9DwXkMfUrNuKrwx-HU",
    authDomain: "netflix-clone-20ce3.firebaseapp.com",
    projectId: "netflix-clone-20ce3",
    storageBucket: "netflix-clone-20ce3.appspot.com",
    messagingSenderId: "1016986257629",
    appId: "1:1016986257629:web:9bffe8935f70a005eab334"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth, provider, storage}

  