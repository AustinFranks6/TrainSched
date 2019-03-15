// Initialize Firebase
var config = {
    apiKey: "AIzaSyBgDJAnlv4dYecPX8-40A1htaFTs2joPoc",
    authDomain: "homework7-2.firebaseapp.com",
    databaseURL: "https://homework7-2.firebaseio.com",
    projectId: "homework7-2",
    storageBucket: "homework7-2.appspot.com",
    messagingSenderId: "968176458095"
  };
  firebase.initializeApp(config);
// let name = "";
// let destination = "";
// let frequency = "";
// let time = "";

var trainData = firebase.database();


$("#addTrain").on("click", function(event){
    event.preventDefault();

    var name = $("#nameInput").val().trim();
    var destination = $("#destinationInput").val().trim();
    var frequency = $("#frequencyInput").val().trim();
    var time = $("#timeInput").val().trim();

    let newTrain = {
        name:name,
        destination:destination,
        frequency:frequency,
        time:time
    };

    firebase.database().ref().push(newTrain);

    $("#nameInput").val("");
    $("#destinationInput").val("");
    $("#trainInput").val("");
    $("#frequencyInput").val("");

})

firebase.database().ref().on("value",function(snapshot){
    $("#nameDisplay").html(snapshot.val().name);
    $("#destinationDisplay").html(snapshot.val().destination);
    $("#frequencyDisplay").html(snapshot.val().frequency);
    $("#timeDisplay").html(snapshot.val().time);

})

firebase.database().ref().on("child_added",function(snapshot){
    $("#nameDisplay").append("<p>" +snapshot.val().name+"</p>")
    $("#destinationDisplay").append("<p>" +snapshot.val().destination+"</p>")
    $("#frequencyDisplay").append("<p>" +snapshot.val().frequency+"</p>")
    $("#timeDisplay").append("<p>" +snapshot.val().time+"</p>")

})