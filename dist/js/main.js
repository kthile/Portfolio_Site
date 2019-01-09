//firebase initialization script, change depending on user
var config = {
    apiKey: "AIzaSyDh08rqJDekKVjb7-7DHCI6uvPnu2gIbCw",
    authDomain: "testform-2a527.firebaseapp.com",
    databaseURL: "https://testform-2a527.firebaseio.com",
    projectId: "testform-2a527",
    storageBucket: "testform-2a527.appspot.com",
    messagingSenderId: "798563655359"
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
