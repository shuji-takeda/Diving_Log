import * as firebase from 'firebase';
import 'firebase/storage';


var config = {
  //この状態なら正常に動く
  //下のコメントアウト部にするとエラー発生→原因は環境変数が読み込めていない
    // apiKey: "AIzaSyCru6a5vcBQIfzyiCwHC_6WNUhgbmTm5HI",
    // authDomain: "diving-point-map.firebaseapp.com",
    // databaseURL: "https://diving-point-map.firebaseio.com",
    // projectId: "diving-point-map",
    // storageBucket: "diving-point-map.appspot.com",
    // messagingSenderId: "1001187361611",
    // appId: "1:1001187361611:web:461c060736980dcf3fdece",
    // measurementId: "G-XTWF9XEDGG"
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