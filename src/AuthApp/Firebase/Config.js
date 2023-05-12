import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB4L29CwKf9hzg66BNLoxhgZeOB7Pu-M64",
    authDomain: "authproject-9ae61.firebaseapp.com",
    projectId: "authproject-9ae61",
    storageBucket: "authproject-9ae61.appspot.com",
    messagingSenderId: "729783198281",
    appId: "1:729783198281:web:dfd39e26233b534a21d598",
    measurementId: "G-7SQMYJ3P9B"
  };

  const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;