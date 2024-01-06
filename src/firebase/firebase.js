import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth, RecaptchaVerifier } from "firebase/auth"; // Import RecaptchaVerifier

const firebaseConfig = {
  apiKey: "AIzaSyDdSPsgIbyHfpBiX6nsUp9JCIVk-rr9l5c",
  authDomain: "filmyverse-4f8b6.firebaseapp.com",
  projectId: "filmyverse-4f8b6",
  storageBucket: "filmyverse-4f8b6.appspot.com",
  messagingSenderId: "347019527553",
  appId: "1:347019527553:web:77a775799fad4891ae5480",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);

export const movieref = collection(db, "movies");
export const reviewsRef = collection(db, "Review");
export const usersRef = collection(db, "users");

const generateRecaptcha = () => {
  window.recaptchaVerifier = new RecaptchaVerifier(
    "recaptcha-container",
    {
      size: "invisible",
      callback: (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
      },
      appVerificationDisabledForTesting: true, // Add this line for testing
    },
    auth
  );
};

export { app, auth, generateRecaptcha };
export default app;
