//YOUR FIREBASE LINKS
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
    user_name = localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0 
      });
      document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name_2 = message_data["name"];
message = message_data["message"];
like  = message_data["like"];
name_tag = "<h4>" +name_2 +"<img src = 'tick.png' class = 'user_tick'></h4> ";
message_tag = "<h4 class = 'message_h4'>" + message+ "</h4>";
like_button = "<button class = 'btn btn-warning' id = "+ firebase_message_id +" value = "+ like +" onclick = 'updateLike(this.id)'>";
span_tag = "<span class = 'glyphicon glyphicon-thumbs-up'> Like: " +like+ "</span></button><hr>";
row = name_tag+message_tag+like_button+span_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();


function updateLike(message_id){
button_id = message_id;
like = document.getElementById(button_id).value;
update_likes = Number(like)+ 1;
firebase.database().ref(room_name).child(message_id).update({
      like:update_likes
});
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}