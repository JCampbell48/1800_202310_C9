// event listener for selecting file to upload. (tech tip b01)
var ImageFile;
function listenFileSelect() {
  // listen for file selection
  var fileInput = document.getElementById("mypic-input"); // pointer #1
  const image = document.getElementById("mypic-goes-here"); // pointer #2

  // When a change happens to the File Chooser Input
  fileInput.addEventListener("change", function (e) {
    ImageFile = e.target.files[0]; //Global variable
    var blob = URL.createObjectURL(ImageFile);
    image.src = blob; // Display this image
  });
}
listenFileSelect();

// this function saves the post from the user and stores in firebase. (tech tip B01)
function savePost() {
  alert("SAVE POST is triggered");
  var stopid = localStorage.getItem("currentstop");
  stopid = "7HM1Q7N82CsnqKD2EYB9"; // hard-coded stop
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      // Do something for the user here.
      var desc = document.getElementById("description").value;
      db.collection("stops")
        .doc(stopid) // current stop for bus stop making a post for
        .collection("posts")
        .add({
          owner: user.uid,
          description: desc,
          last_updated: firebase.firestore.FieldValue.serverTimestamp(), //current system time
        })
        .then((doc) => {
          console.log("Post document added!");
          console.log(doc.id);
          uploadPic(doc.id);
        });
    } else {
      // No user is signed in.
      console.log("Error, no user signed in");
    }
  });
}

// funtion uploads the selected image and saves the url as a field in the upload post document (tech tips 01)
function uploadPic(postDocID) {
  console.log("inside uploadPic " + postDocID);
  var storageRef = storage.ref("images/" + postDocID + ".jpg");

  storageRef
    .put(ImageFile) //global variable ImageFile
    .then(function () {
      console.log("Uploaded to Cloud Storage.");
      storageRef.getDownloadURL().then(function (url) {
        // Get URL of the uploaded file
        console.log("Got the download URL.");

        // changed collection from "posts" to "stops" but firebase still adding to
        // posts collection in firebase
        db.collection("stops")
          .doc("7HM1Q7N82CsnqKD2EYB9")
          .collection("posts")
          .doc(postDocID)
          .set(
            {
              image: url, // Save the URL into users collection
            },
            { merge: true }
          )
          .then(function () {
            console.log("Added pic URL to Firestore.");
          });
      });
    })
    .catch((error) => {
      console.log("error uploading to cloud storage");
    });
}
