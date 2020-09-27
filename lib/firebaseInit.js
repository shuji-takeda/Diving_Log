import firebase from "firebase";
import firebaseConfig from './firebaseConfig';

  // Initialize Firebase
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
    }else{
    firebase.app();
    }

export default firebase;