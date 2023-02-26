//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyCFHS8kBllN0C8uzH4WYMogsvupZm_SzI0",
    authDomain: "comp1800-94a1c.firebaseapp.com",
    projectId: "comp1800-94a1c",
    storageBucket: "comp1800-94a1c.appspot.com",
    messagingSenderId: "627732799802",
    appId: "1:627732799802:web:3eec37bea71342fac07003"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();