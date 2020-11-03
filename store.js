//Firebaseインポート
import * as firebase from 'firebase';
import 'firebase/storage';

//Reduxインポート
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

// ステート初期値
const initial = {
  message:'START',
  count: 0,
  AD:[],
}


// レデューサー
function counterReducer (state = initial, action) {
  switch (action.type) {

    //ダミー
    case 'UPDATE USER':
      return action.value;

    //reduxテキストサンプル（後に削除）
    case 'INCREMENT':
      return {
        message: 'INCREMENT',
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        message: 'DECREMENT',
        count: state.count - 1
      };
    case 'RESET':
      return {
        message: 'RESET',
        count: initial.count
      };
    default:
      return state;
  }
}

// initStore関数（redux-store.jsで必要）
export function initStore(state = initial) {
  return createStore(counterReducer, state,
    applyMiddleware(thunkMiddleware))
}

var config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

if(!firebase.apps.length){
try {
  fireapp = firebase.initializeApp(config);
} catch (error) {
  console.log(error.message);
}
}else{
    firebase.app();
    }
export default firebase;