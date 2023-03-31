
import {app} from "../firebaseInitilization";
// import {app} from "/fireBaseInt/firebaseInitilization.js";

import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

// import {} from "../homePage/homePageElements"


window.login = function (){

  const usrLogin = document.querySelector(".usrLogin");
  const email = usrLogin.email.value;
  const password = usrLogin.password.value;

  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    console.log("skjdksj")

    location.href = './src/homePage/homePage';
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert(errorMessage)
  });




}


window.register = function(){
  const userSignUp = document.querySelector(".usrSignup");
  const name = userSignUp.name.value;
  const usrName = userSignUp.userName.value;
  const email = userSignUp.email.value;
  const password = userSignUp.password.value;
  const auth = getAuth(app); 
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user.email);
      alert("Your account has been created. Welcome to InternXP!");
      location.href = "/src/homePage/homePage";

      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // console.log(errorMessage);
      alert(errorMessage);

      // ..
    });
  

  // console.log(email + " " + password);
  // // console.log("Hello");
  // alert(email + " " + password);
}

window.rdAdded = function writeUserData(iusrName, iname, iemail) {
  const userSignUp = document.querySelector(".usrSignup");
  const name = userSignUp.name.value;
  const usrName = userSignUp.userName.value;
  const email = userSignUp.email.value;
  const password = userSignUp.password.value;
  console.log("in added")
  const db = getDatabase(app);
  set(ref(db, 'TheStudents/' + usrName), {
    name : name,
    userName : usrName,
    email : email
  });
}