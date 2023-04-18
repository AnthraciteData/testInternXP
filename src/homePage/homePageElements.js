import { getAuth, onAuthStateChanged } from "firebase/auth";
import {app} from "../firebaseInitilization";
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar")
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
var resources = "resources"
menuBtn.onclick = () => {
    menu.classList.add("active");
    menuBtn.classList.add("hide");
    body.classList.add("disabledScroll");
}
cancelBtn.onclick = () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    body.classList.remove("disabledScroll");
}

window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

window.toStudySpace = function () {
    location.href = "../studySpace/study-space";
}

window.jobOpp = function (){

    location.href = '../JobOpenings/JobOpenings';

}
window.learningOpp = function(){

  location.href = '../LearningOpportunities/LearningOpportunities'

}

window.internOpp = function (){

  location.href = '../Internships/internship.html'

}
window.resumeT = function(){
    location.href = '../ResumeTips/ResumeTips.html'
}

const auth = getAuth(app);
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log("This is the user if thats loged in "+uid);
    // ...
  } else {
    // User is signed out
    // ...
  }
});

