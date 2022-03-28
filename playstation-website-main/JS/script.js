function onClickButton() {
  console.log("test");
}
var imgSource = [
  "featured-games.jpg",
  "Playstation-5-games-console-transparent-background-png-image.webp",
];
var imgPath = "../playstation-website-main/assets/";

// Background Image Slideshow Function
var i = 0;
setInterval(function () {
  var imgURL = imgPath + imgSource[i];
  var bg = document.getElementById("background-slideshow");
  bg.style.backgroundImage = `url(${imgURL})`;
  i = i + 1;
  if (i == imgSource.length) {
    i = 0;
  }
}, 1500);

var username = document.getElementById("username");
var password = document.getElementById("password");

var accounts = [
  { username: "admin.berisha", password: "jonberisha123" },
  { username: "rron.zogjani", password: "rrz1234" },
  { username: "gonifs", password: "18%32=:F9" },
  { username: "vigan", password: "Majaci1" },
];

// modal
var modal = document.getElementById("modal-form");
var btn = document.getElementById("popmodule");
var span = document.getElementsByClassName("close")[0];
var overlay = document.getElementById("overlay-color");

//open modal on button click
btn.onclick = function () {
  modal.style.display = "block";
  overlay.style.display = "block";
};

//close modal when cliking span
span.onclick = function () {
  modal.style.display = "none";
  overlay.style.display = "none";
};

// //login function
function logIn() {
  //   //Get values of input
  var usrValue = username.value;
  var pswValue = password.value;
  var loginInfo = { username: usrValue, password: pswValue };
  console.log("accounts", accounts);
  console.log("logininfo", loginInfo);
  // var authentication = false


  for (var i = 0; i < accounts.length; i++) {
    console.log(accounts[i]);
    console.log(loginInfo)
    if (loginInfo.username === accounts[i].username && loginInfo.password === accounts[i].password) {
      authentication = true
      break;
    }
  }
  if (authentication === true) {
  alert("You are logged in!")
  return authentication;
  }else {
    alert("username / password combination are not correct")
  return authentication;
  }
}

//
var authentication
// var noBtn = document.getElementsByTagName('button');
//

