// JavaScript Document
<script type="module">

  // Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";

  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";

  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {

    apiKey: "AIzaSyA8OnkOBRafott6qN4uC_nnLgvwboRa10o",

    authDomain: "xaragameishere.firebaseapp.com",

    projectId: "xaragameishere",

    storageBucket: "xaragameishere.appspot.com",

    messagingSenderId: "299916883797",

    appId: "1:299916883797:web:3ec0f7ac1a6f87d1e461dc",

    measurementId: "G-3H4ZGWRQLD"

  };


  // Initialize Firebase

  const app = initializeApp(firebaseConfig);

  const analytics = getAnalytics(app);

</script>