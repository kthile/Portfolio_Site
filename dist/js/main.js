//firebase initialization script
var config = {
  apiKey: "AIzaSyBBXbPENXBwg3cv4flNuOGVB7NZ5rCalNU",
  authDomain: "contactform-bb9dc.firebaseapp.com",
  databaseURL: "https://contactform-bb9dc.firebaseio.com",
  projectId: "contactform-bb9dc",
  storageBucket: "contactform-bb9dc.appspot.com",
  messagingSenderId: "677803860877"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref("messages");

//listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

//submit form
function submitForm(e) {
  e.preventDefault();

  //get vals
  var name = getInputVal("name");
  var company = getInputVal("company");
  var email = getInputVal("email");
  var phone = getInputVal("phone");
  var message = getInputVal("message");

  // save message
  saveMessage(name, company, email, phone, message);

  //show alert
  document.querySelector(".alert").style.display = "block";

  //hide alert after 3seconds or it'll be annoying
  setTimeout(function() {
    document.querySelector(".alert").style.display = "none";
  }, 5000);

  //clear out form
  document.getElementById("contactForm").reset();
}

//function to get form value
function getInputVal(id) {
  return document.getElementById(id).value;
}

//function to save msg to firebase
function saveMessage(name, company, email, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
  });
}
