
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC8tY-kFfc7FXF9Y13lu3XiYmXsk7yGDc8",
    authDomain: "project-93-89a3c.firebaseapp.com",
    projectId: "project-93-89a3c",
    storageBucket: "project-93-89a3c.appspot.com",
    messagingSenderId: "720087290595",
    appId: "1:720087290595:web:819a6183c8c794c9cf6bd6"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
   user_name = localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

   function addRoom() 
   {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child("room_name").update ({
          purpose : "adding room name"
    });
   }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room Name -" + Room_name);
row = "<div class = 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>"; 
document.getElementById("ouput").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name) 
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}