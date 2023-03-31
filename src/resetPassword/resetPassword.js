import {app} from "../firebaseInitilization";
import { confirmPasswordReset, getAuth, sendPasswordResetEmail, updatePassword } from "firebase/auth";

window.backToindex = function(){

  location.href = "/";

}
window.toResetPage = function(){

  location.href = '/src/resetPassword/resetPassword';

}

window.sendEmail = function(){

    const resetPassword = document.querySelector(".resetPassword");

    const email = resetPassword.email.value;

    const auth = getAuth(app);

    sendPasswordResetEmail(auth, email)
    .then(() => {

        alert("Please check your email for the password reset link.");
        location.href = "/";

        // Password reset email sent!
        // ..
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorMessage);
        // ..
    });
   
}

// document.addEventListener('DOMContentLoaded', () => {
//     // TODO: Implement getParameterByName()
  
//     // Get the action to complete.
//     const mode = getParameterByName('mode');
//     // Get the one-time code from the query parameter.
//     const actionCode = getParameterByName('oobCode');
//     // (Optional) Get the continue URL from the query parameter if available.
//     const continueUrl = getParameterByName('continueUrl');
//     // (Optional) Get the language code if available.
//     const lang = getParameterByName('lang') || 'en';
  
//     handleResetPassword(auth, actionCode, continueUrl, lang);

//   }, false);

  window.resetPass  =function(){

    const passContainer = document.querySelector(".input-group");

    const newPassword = passContainer.newPW.value;

    const queryString = window.location.search;

    console.log(queryString);

    const urlParams = new URLSearchParams(queryString);

    const oobCode = urlParams.get('oobCode')

    const auth = getAuth(app);



    console.log(oobCode);

    confirmPasswordReset(auth, oobCode, newPassword).then((resp) => {

        alert('Your password has been changed. You may now log in with your new password.');
        window.location.href = '/';
        // Password reset has been confirmed and new password updated.
  
        // TODO: Display a link back to the app, or sign-in the user directly
        // if the page belongs to the same domain as the app:
        // auth.signInWithEmailAndPassword(accountEmail, newPassword);
  
        // TODO: If a continue URL is available, display a button which on
        // click redirects the user back to the app via continueUrl with
        // additional state determined from that URL's parameters.
      }).catch((error) => {

        alert(error);
        // Error occurred during confirmation. The code might have expired or the
        // password is too weak.
      });

    

  }

//   window.restPass = function(){

//     function handleResetPassword(auth, actionCode, continueUrl, lang) {
//         // Localize the UI to the selected language as determined by the lang
//         // parameter.
      
//         // Verify the password reset code is valid.
//         verifyPasswordResetCode(auth, actionCode).then((email) => {
//           const accountEmail = email;
      
//           // TODO: Show the reset screen with the user's email and ask the user for
//           // the new password.

//           document.querySelector(".input-group")
//           const newPassword = "...";
      
//           // Save the new password.
//           confirmPasswordReset(auth, actionCode, newPassword).then((resp) => {
//             // Password reset has been confirmed and new password updated.
      
//             // TODO: Display a link back to the app, or sign-in the user directly
//             // if the page belongs to the same domain as the app:
//             // auth.signInWithEmailAndPassword(accountEmail, newPassword);
      
//             // TODO: If a continue URL is available, display a button which on
//             // click redirects the user back to the app via continueUrl with
//             // additional state determined from that URL's parameters.
//           }).catch((error) => {
//             // Error occurred during confirmation. The code might have expired or the
//             // password is too weak.
//           });
//         }).catch((error) => {
//           // Invalid or expired action code. Ask user to try to reset the password
//           // again.
//         });
//       }

//   }


