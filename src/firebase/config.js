import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyA2bzC7NI7rWosk8mn2pvK-n5_s2a_ou7U',
  authDomain: 'firegram-5e16f.firebaseapp.com',
  projectId: 'firegram-5e16f',
  storageBucket: 'firegram-5e16f.appspot.com',
  messagingSenderId: '578667779833',
  appId: '1:578667779833:web:d5adb647907bff005eb428',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
