// Animate Delay
setTimeout(function() {
  jQuery("#cspio-content")
    .show()
    .addClass("animated fadeIn");
}, 250);

// Reseize
function resize() {
  $("head").append("<style id='form-style' type='text/css'></style>");
  $("#form-style").html(
    ".cspio .input-group-btn, .cspio .input-group{display:block;width:100%;}.cspio #cspio-subscribe-btn{margin-left:0;width:100%;display:block;}.cspio .input-group .form-control:first-child, .cspio .input-group-addon:first-child, .cspio .input-group-btn:first-child>.btn, .cspio .input-group-btn:first-child>.dropdown-toggle, .cspio .input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle) {border-bottom-right-radius: 4px;border-top-right-radius: 4px;}.cspio .input-group .form-control:last-child, .cspio .input-group-addon:last-child, .cspio .input-group-btn:last-child>.btn, .cspio .input-group-btn:last-child>.dropdown-toggle, .cspio .input-group-btn:first-child>.btn:not(:first-child) {border-bottom-left-radius: 4px;border-top-left-radius: 4px;}"
  );
}

$("#cspio-content").one(
  "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
  function() {
    var width = $("#cspio-field-wrapper").width();
    if (width < 480 && width != 0) {
      resize();
    }
  }
);

console.log("this works");
const contactRef = firebase.database().ref("contacts");
// form

//listen for form submit

document.getElementById("cspio-form").addEventListener("submit", submitForm);

//submit form
function submitForm(e) {
  e.preventDefault();
  var email = getInputVal("cspio-email");
  console.log(email);
  saveContact(email);
  document.querySelector(".confirm").style.display = "block";

  setTimeout(function() {
    document.querySelector(".confirm").style.display = "none";
    document.querySelector("#cspio-email").value = "";
  }, 3000);
}

//function to get form values

function getInputVal(id) {
  return document.getElementById(id).value;
}

//save contact

// Initialize Firebase

var config = {
  apiKey: "AIzaSyBjWlc8tZLInLp_C43KGL2fKfpExHr_AnE",
  authDomain: "cbd4horses-47217.firebaseapp.com",
  databaseURL: "https://cbd4horses-47217.firebaseio.com",
  projectId: "cbd4horses-47217",
  storageBucket: "cbd4horses-47217.appspot.com",
  messagingSenderId: "321951766420"
};
firebase.initializeApp(config);

//save contact to firebase

function saveContact(email) {
  console.log("saving contact");
  const newContactRef = contactRef.push();
  newContactRef.set({
    email: email
  });
}
