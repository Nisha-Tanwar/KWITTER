
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
  apiKey: "AIzaSyBX2OP7cabpSBbFZKT8ve290u9nhBgH4Ko",
  authDomain: "kwitter-169d0.firebaseapp.com",
  databaseURL: "https://kwitter-169d0-default-rtdb.firebaseio.com",
  projectId: "kwitter-169d0",
  storageBucket: "kwitter-169d0.appspot.com",
  messagingSenderId: "644809450598",
  appId: "1:644809450598:web:bffaff4c57178c558579a7",
  measurementId: "G-GS7WGNM6F4"
};
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
     

              Name=localStorage.getItem("user name");
              document.getElementById("user_name").innerHTML="Welcome "+Name+ "!";

              function addroom()
              {
                  room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({purpose:"addingroom"});
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
              }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room names-",Room_names);
       row="<div class='romm_name' id="+Room_names+" onclick='redicerttoroomname(this.id)'>#"+Room_names+"</div> <hr>";
       document.getElementById("output").innerHTML+=row;

      //Start code

      //End code
      });});}
getData();  
function redicerttoroomname(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}