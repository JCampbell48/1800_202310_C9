//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
// var firebaseConfig = {
//     apiKey: "AIzaSyCFHS8kBllN0C8uzH4WYMogsvupZm_SzI0",
//     authDomain: "comp1800-94a1c.firebaseapp.com",
//     projectId: "comp1800-94a1c",
//     storageBucket: "comp1800-94a1c.appspot.com",
//     messagingSenderId: "627732799802",
//     appId: "1:627732799802:web:3eec37bea71342fac07003"
// };

const firebaseConfig = {
    apiKey: "AIzaSyAh8eXDmXBNi9UXtpUzqUR8GOzcVLeUOOE",
    authDomain: "comp1800-7c3b3.firebaseapp.com",
    projectId: "comp1800-7c3b3",
    storageBucket: "comp1800-7c3b3.appspot.com",
    messagingSenderId: "993135310167",
    appId: "1:993135310167:web:07784efdf68daf3496ba12"
  };



//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it    
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


// added 
firebase.auth().onAuthStateChanged();



  // using firebase sdk for getting current user and user id
  firebase.auth().onAuthStateChanged(function(user) {
    function savePost() {
        alert ("SAVE POST is triggered");
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                // Do something for the user here. 
                var desc = document.getElementById("description").value;
                db.collection("posts").add({
                    owner: user.uid,
                    description: desc,
                    last_updated: firebase.firestore.FieldValue
                        .serverTimestamp() //current system time
                }).then(doc => {
                    console.log("Post document added!");
                    console.log(doc.id);
                    uploadPic(doc.id);
                })
            } else {
                // No user is signed in.
                              console.log("Error, no user signed in");
            }
        })
    }
})
