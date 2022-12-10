const firebaseConfig = {
      apiKey: "AIzaSyDeGg-smxZso7EH3Xsd6gK4Ur6RVFZorh4",
      authDomain: "kwitter-c884a.firebaseapp.com",
      databaseURL: "https://kwitter-c884a-default-rtdb.firebaseio.com",
      projectId: "kwitter-c884a",
      storageBucket: "kwitter-c884a.appspot.com",
      messagingSenderId: "239873348176",
      appId: "1:239873348176:web:aae845a6a73b764d5bb755",
      measurementId: "G-FHT99QBPKH"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name +"!";
function addroom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name" , room_name);
      window.location= "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name-" + Room_names);
      row = "<div class='room_name' id='"+ Room_names +"' onclick = 'redirect(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function redirect(name){
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}