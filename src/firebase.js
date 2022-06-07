import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCM1Fzf3qbhonLnMD947ckJOvphSr2-t6Y",
    authDomain: "clone-yt-535c6.firebaseapp.com",
    projectId: "clone-yt-535c6",
    storageBucket: "clone-yt-535c6.appspot.com",
    messagingSenderId: "1044659587550",
    appId: "1:1044659587550:web:c53b7cb5cf2a7e3252f54f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };
