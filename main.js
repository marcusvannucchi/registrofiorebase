import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjh5-gWhmBXutmaAXzXwiqf7yrjRSolf4",
  authDomain: "aulafirebase-b4f5c.firebaseapp.com",
  projectId: "aulafirebase-b4f5c",
  storageBucket: "aulafirebase-b4f5c.appspot.com",
  messagingSenderId: "734200720043",
  appId: "1:734200720043:web:d0eba20b82798f598ca5ee"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const autentic = getAuth(app)

const btnEnviar = document.getElementByIdI("btnenviar");

 btnEnviar.addEventListener("click", () => {
     let email = document.getElementById("email").value;
     let senha = document.getElementById("senha").value;

    createUserWithEmailAndPassword(autentic, email, senha)
        .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log("Usuario criado:", user);
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });
} )

 console.log(autentic)