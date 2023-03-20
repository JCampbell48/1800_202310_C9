
//Function for finding out which user is logged in (tech tips B07)
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      // Do something for the user here.
    } else {
      // No user is signed in.
    }
  });


  // function for getting information from the user (tech tips B07)
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      // Do something for the user here.
    } else {
      // No user is signed in.
    }
  });


  //function for write something for user 
  
  <template id="cardtemplate">
        <div class="card py-2 mx-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some text</p>
                <i class="favourite fa fas-heart"></i>
            </div>
        </div>
    </template>

//------------------------------------------------------------------------
// This function is called to display all the posts in the posts collection
// It will clone a card, and attach name, detail, plus a "fave" icon with listener
//------------------------------------------------------------------------
function displayPosts(){
      db.collection("posts").get()
      .then(snap=>{
          snap.forEach(doc=>{
              var name = doc.data().name;
              var details = doc.data().details;
						  let newcard = document.getElementById("cardtemplate").content.cloneNode(true);
              newcard.querySelector('.card-title').innerHTML = name;
              newcard.querySelector('.card-text').innerHTML = details;
              newcard.querySelector('.favourite').setAttribute("id", doc.id);
              newcard.querySelector('.favourite').setAttribute("onclick", "savefave(doc.id)");
              document.getElementById("posts-go-here").appendChild(newcard);
         })
      })
}